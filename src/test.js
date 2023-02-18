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
//
// sendText('Cat')
// sendText('Dog', 15)


// ---------------------- MOVING BOB ----------------------
// const bob = document.querySelector('.face');
// let count = 0
//
// function moveBob(){
//     count += 50
//     bob.style.left = count + 'px'
// }
//
// bob.addEventListener('click', moveBob)


// ---------------------- CONECTING VARIABLES BY CONCAT ----------------------
// const string = "Hello "
// const string2 = "Marian"
//
// console.log(string.concat(string2))
//
// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const array3 = [7,8,9]
//
// console.log(array1 + array2)
// console.log(array1.concat(array2, array3))
//
// const newArray = array1.concat(array2)
//
// console.log(newArray)


// ---------------------- CONECTING VARIABLES BY CONCAT ----------------------
// const textDisplay = document.querySelectorAll('.ball')[0]
//
// const emotions = ['Happy', 'Sad', 'Confident']
// console.log(emotions)
// console.log(emotions.join(" "))
//
// const newWord = emotions.join(" ")
//
// //emotions.pop() //changes the lenght of the array - remove last element
// //emotions.shift() //changes the lenght of the array - remove first element
// //emotions.unshift('Energetic') //changes the array by adding an element at the beginning
// //emotions.push('Lonely') //changes the array by adding an element at the end
// //const emotions2 = emotions.slice(1,2) //create a new array by slicing elements from the old one
// //console.log(emotions2)
//
// textDisplay.innerHTML = emotions