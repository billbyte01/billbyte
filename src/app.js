let color = 'white';

const button = document.getElementById('dark_mode');

button.addEventListener('click',(event) => {
    color = color === 'white' ? 'black' : "white";
    document.body.style.background = color;
    // document.body.classList.toggle('color')
    // when in .css file we have .color{background: black;}
})

// WHY TO NOT USE 'var'
// function findX(){
//     var x = 1
//     {
//         let x = 2
//         console.log('inside: ' + x)
//     }
//     console.log('outside: ' + x)
// }
// findX()

const time = 12;

if (time < 12) {
    console.log('good morning')
} else if (time === 12) {
    console.log('noon')
} else {
    console.log('good afternoon')
}