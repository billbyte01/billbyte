let color = 'white';

const button = document.getElementById('dark_mode');

button.addEventListener('click',(event) => {
    color = color === 'white' ? 'black' : "white";
    document.body.style.background = color;
    // document.body.classList.toggle('color')
    // when in .css file we have .color{background: black;}
})