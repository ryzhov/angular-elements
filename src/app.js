const button = document.querySelector('custom-button');

button.addEventListener('clickAction', (event) => {
    console.log(`emitted: ${event.detail}`);
})

setTimeout(() => button.label = 'Second Value', 6000);

console.log('app bootstraped');
