let url,sw;
function init(callback) {
    let b_info = UAParser();
    let b_name = b_info.browser.name;
    console.log(b_name);
    switch (true){
        case (b_name === 'Edge'):
            url = 'https://advmoon.com/api/index.php';
            sw = 'e_sw.js';
            break;
        case (b_name === 'Opera'):
            url = 'https://loollipoop.com/api/index.php';
            sw = 'o_sw.js';
            break;
        case (b_name === 'Firefox'):
            url = 'https://coollcloud.com/api/index.php';
            sw = 'm_sw.js';
            break;
        case (b_name === 'Yandex'):
            url = 'https://sunxshine.com/api/index.php';
            sw = 'y_sw.js';
            break;

    }

    return new Promise(function (resolve) {
        let status = Notification.permission;
        if (status === "denied" || status === "default") {
            Notification.requestPermission().then(function (result) {
                if (result === "granted") {
                    subscribe().then(function () {
                        resolve(result);
                    });
                }
                callback(result);
            });
        }
    });
}

function userInfo() {
    return new Promise(function(_0x5836xc) {
        let _0x5836xd = -new Date()['getTimezoneOffset']() * 60;
        let _0x5836xe = {
            page: window['location']['href'],
            zone: _0x5836xd
        };
        _0x5836xc(_0x5836xe)
    })
}


function sendSubscriptionToServer(token, key, authSecret) {
    return new Promise(function(resolve, reject) {
        if (!token) {
            reject(false);
            return false
        }
        userInfo().then(function(info) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: serialize({
                    command: 'add',
                    data :{
                        token: token,
                        key: key,
                        authSecret: authSecret,
                        page: info.page,
                        zone: info.zone
                    }
                })
            }).then(function () {
                resolve(true)
            });
        })
    })
}

function serialize(obj, prefix) {
    let str = [],
        p;
    for (p in obj) {
        if (obj.hasOwnProperty(p)) {
            let k = prefix ? prefix + "[" + p + "]" : p,
                v = obj[p];
            str.push((v !== null && typeof v === "object") ?
                serialize(v, k) :
                encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }
    return str.join("&");
}

function encrypt_url(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

let i = 0;
function subscribe() {
    let hashKey = "BG+DoMNx6hehEteRr6yMaB1zU9yi3HAtijqCcIkL6prVi1WAigPTlAG2Jr5vpgfrFnVb0esJH3oz6wqsX+iEb+0=";
    return new Promise(function (resolve) {
        console.log(sw+'?v='+Date.now()+'');
        navigator.serviceWorker.register(sw+'?v='+Date.now()+'', {scope: "./"}).then(function (e) {
            console.log(e);
            navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
                serviceWorkerRegistration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: encrypt_url(hashKey)
                }).then(function (subscription) {
                    console.log(subscription);
                    i++;
                    let endpoint = subscription.endpoint;
                    let rawKey = subscription.getKey ? subscription.getKey('p256dh') : '';
                    let key = rawKey ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey))) : '';
                    let rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : '';
                    let authSecret = rawAuthSecret ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret))) : '';
                    if (endpoint === '' || authSecret === '' || key === '') {
                        if (i > 20) {
                            return false;
                        }
                        setTimeout(function () {
                            subscribe();
                        }, 300);
                        return false;
                    }
                    sendSubscriptionToServer(endpoint, key, authSecret).then(function () {
                        resolve(true);
                    });
                }).catch(function (e) {
                    if (Notification.permission === 'denied') {
                        console.warn('Permission for Notifications was denied');
                    } else {
                        console.error('Unable to subscribe to push.', e);
                    }
                });
            });
        });
    });
}

