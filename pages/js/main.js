window.addEventListener('error', function(event) {
    fetch('/error', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: event.error.message,
            context: {
                page: window.location.href,
                sourcefile: `${event.filename} - ${event.lineno} - ${event.colno}`,
            }
        }),
    }).then();
});

const firstButton = document.querySelector('#button1');
firstButton.addEventListener('click', () => buttonHandler('Custom error 1'));

const secondButton = document.querySelector('#button2');
secondButton.addEventListener('click', () => buttonHandler('Custom error 2'));

function buttonHandler (message) {
    throw new Error(message);
}

function init () {
    if (navigator.userAgent.indexOf('Googlebot') > -1) {
        throw new Error('Googlebot entered');
    }
}

init();
