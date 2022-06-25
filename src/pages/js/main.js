const getBrowserFromUserAgent = (userAgent) => {
    if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
    if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
    if (userAgent.indexOf('Safari') > -1) return 'Safari';
    return 'Unknown browser';
}

const firstButton = document.querySelector('#button1');
firstButton.addEventListener('click', () => {
    undefinedObject.objectProperty;
});

const secondButton = document.querySelector('#button2');
secondButton.addEventListener('click', () => {
    undefinedObject.objectMethod();
});

const thirdButton = document.querySelector('#button3');
thirdButton.addEventListener('click', () => {
    throw 'Exception is thrown';
});

const fourthButton = document.querySelector('#button4');
fourthButton.addEventListener('click', () => {
    throw new Error(`Error from ${getBrowserFromUserAgent(navigator.userAgent)}`);
})

function init () {
    if (navigator.userAgent.indexOf('Googlebot') > -1) {
        throw new Error('Googlebot entered');
    }
}

init();
