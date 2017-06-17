let app = require('express')()
let server = require('http').Server(app)
let io = require('socket.io')(server)

server.listen(4605)

let connections = []


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


io.on('connection', (socket) => {
  connections.push(socket)
  console.log('Connected: %s sockets connected', connections.length)
  io.emit('status', { status: 'Connected', connections: connections.length })

  socket.on('disconnect', (data) => {
    connections.splice(connections.indexOf(socket), 1)
    io.emit('status', { status: 'Disconnected', connections: connections.length })
    console.log('Disconnected: %s sockets connected', connections.length)
  })
})
