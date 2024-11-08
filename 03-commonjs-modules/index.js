const {myName, myHobbies, myFavouriteNumber} = require('./multiple-exports')
const {myName: myOtherName, myFriendsName, myGreatHobbies} = require('./export-and-import')
const greeting = require('./my-modules/single-export')

// imports from multiple-exports
console.log(myName)
console.log(myHobbies)
console.log(myFavouriteNumber)

// mutates array in the multiple-exports
myHobbies.push('climbing')
// export from single-exports
greeting(myName)

// Imports fromm export-and-import
console.log(myOtherName)
console.log(myFriendsName)
console.log(myGreatHobbies)