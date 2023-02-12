// WHY NOT TO USE 'var'
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

// STRING NOT EQUAL 
// const fruits = ['apple', 'banana', 'grape', 'cherry']
// if (!fruits.includes('cherry')) {
//     console.log('cherry is missing')
// } else {
//     console.log('cherry lady')
// }

// OBJECTS
const family = [
    {
        firstName: 'Emi',
        lastName: 'Pociecha',
        age: 33,
        use_crypto: false
    },
    {
        firstName: 'Sławek',
        lastName: 'Pociecha',
        age: 33,
        use_crypto: true
    },
    {
        firstName: 'Wiola',
        lastName: 'Pociecha',
        age: 3,
        use_crypto: false
    }
]
console.log(family[0].firstName)