const firstButton = document.querySelector('#button1');
firstButton.addEventListener('click', () => buttonHandler('Custom error 1'));

const secondButton = document.querySelector('#button2');
secondButton.addEventListener('click', () => buttonHandler('Custom error 2'));

const thirdButton = document.querySelector('#button3');
thirdButton.addEventListener('click', () => {
    const type = 'test';
    console.log(typo);
})

function buttonHandler (message) {
    throw new Error(message);
}

function init () {
    if (navigator.userAgent.indexOf('Googlebot') > -1) {
        throw new Error('Googlebot entered');
    }
}

init();
