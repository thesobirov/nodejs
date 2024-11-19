const http = require('http')

const PORT = 5000

const comments = [
    {id: 100, text: 'First comment', author: 'Shahzod'},
    {id: 526, text: 'Second comment', author: 'Alice'},
    {id: 724, text: 'Last comment', author: 'Bob'},
]

const server = http.createServer((req, res) => {
    if (req.url === '/html') {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/html')
        res.write('<html><body><div>')
        res.write('<h1>Greetings from the HTTP server!</h1>')
        res.write('</div></body></html>')
        return res.end()
    }
    if (req.url === '/text') {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/plain')
        return res.end('This in plain text!')
    }
    if (req.url === '/json') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        return res.end(JSON.stringify(comments))
    }
})

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`)
})