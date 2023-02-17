let color = 'white';

const button = document.getElementById('dark_mode');

button.addEventListener('click', function() {
    // using ternary operators: color = color === 'white' ? 'black' : "white";
    if (color === 'white') {
        color = 'black';
    } else {
        color = 'white';
    }
    document.body.style.background = color;
    // document.body.classList.toggle('color')
    // when in .css file we have .color{background: black;}
})

