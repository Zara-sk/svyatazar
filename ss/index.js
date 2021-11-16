const express = require('express')
const fs = require('fs');
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/unleashed', (req, res) => {
    res.sendFile(__dirname + '/unleashed.html')
})

io.on('connection', (socket) => {
    socket.on('comment', (data) => {
        io.emit('comment', {
            message: data.message,
            name: data.name
        })
        var cmnt = {
            name: data.name,
            comment: data.message
        }
        var json = JSON.stringify(cmnt)
        fs.readFile('./static/comments.json', 'utf-8', (err, data) =>{
            if(err) throw err
            var cmnts = JSON.parse(data)
            cmnts["comments"].push(cmnt)
            console.log(cmnts)
            fs.writeFileSync('./static/comments.json', JSON.stringify(cmnts))
        })
    })
})


http.listen(8000, () => {
    console.log('Server has started!')
})