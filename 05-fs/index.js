const fs = require('fs')


fs.writeFile('./first.txt', 'First file text', (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('File first.txt was written')
        fs.appendFile('./first.txt', '\nOne more line', (err) => {
            if (err) console.log(err)
            else {
                console.log('Appended text to first.txt file')
                fs.rename('./first.txt', './renamed.txt', (err) => {
                    if (err) console.log(err)
                    else console.log('Renamed first.txt to second.txt')
                })
            }
        })
    }
})

