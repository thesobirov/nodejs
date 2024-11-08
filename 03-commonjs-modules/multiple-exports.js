const myName = 'Shahzod'
const myHobbies = ['swimming', 'boxing', 'cycling']
const myFavouriteNumber = 77

console.log('Text from the multiple-exports CommonJS module')

// module.exports and export reference the same object in memory
exports.myName = myName
exports.myHobbies = myHobbies
exports.myFavouriteNumber = myFavouriteNumber