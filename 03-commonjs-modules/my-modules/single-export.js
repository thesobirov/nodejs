function greeting(name) {
    console.log('Hello', name)
}


module.exports = greeting;
// Don't do this!
// module.exports remains {}
// exports = greeting;