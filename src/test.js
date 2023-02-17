// ---------------------- WHY NOT TO USE 'var' ----------------------
// function findX(){
//     var x = 1
//     {
//         let x = 2
//         console.log('inside: ' + x)
//     }
//     console.log('outside: ' + x)
// }
//
// findX()


// UNARY PLUS -- it changes text to number
// let y = '4'
// console.log(+y)


// ---------------------- STRING NOT EQUAL ----------------------
// const fruits = ['apple', 'banana', 'grape', 'cherry']
// if (!fruits.includes('cherry')) {
//     console.log('cherry is missing')
// } else {
//     console.log('cherry lady')
// }


// ---------------------- OBJECTS ----------------------
// const family = [
//     {
//         firstName: 'Emi',
//         lastName: 'Pociecha',
//         age: 33,
//         use_crypto: false
//     },
//     {
//         firstName: 'Sławek',
//         lastName: 'Pociecha',
//         age: 33,
//         use_crypto: true
//     },
//     {
//         firstName: 'Wiola',
//         lastName: 'Pociecha',
//         age: 3,
//         use_crypto: false
//     }
// ]
//
// for (let i = 0; i < family.length; i++) {
//     if (family[i].use_crypto === true) {
//         console.log('Good! You are not Fiat Marine!');
//     } else {
//         console.log('Oh no! Fiat Marine!');
//     }
// }


// ---------------------- FUNCTIONS ----------------------
// function sendText(name, time) {
//     console.log('Why my eyes ya ' + name + '? At ' + time)
// }

// sendText('Cat')
// sendText('Dog', 15)


// ---------------------- MOVING BOB ----------------------
const bob = document.querySelector('.face');
let count = 0

function moveBob(){
    count += 50
    bob.style.left = count + 'px'
}

bob.addEventListener('click', moveBob)