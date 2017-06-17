let app = require('express')()
let server = require('http').Server(app)
let io = require('socket.io')(server)
let gameData = require('./gameData.js')

server.listen(4606)

let connections = []


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


io.on('connection', (socket) => {
  socket.join('faf')
  connections.push(socket)
  console.log('Connected: %s sockets connected', connections.length)
  io.to('faf').emit('status', { status: 'Connected', connections: connections.length })

  setInterval(() => {
    io.to('faf').emit('getClients', gameData.getClients())
    io.to('faf').emit('getBombs', gameData.getBombs())
    io.to('faf').emit('getTargets', gameData.getTargets())
  }, 1000)

  socket.emit('get-color', { color: gameData.getRandomColor() })

  socket.on('updateClient', data => {
    gameData.updateClients(data[color], data)
  })

  socket.on('updateBomb', data => {
    gameData.updateBombs(data[color], data)
  })

  socket.on('disconnect', (data) => {
    connections.splice(connections.indexOf(socket), 1)
    io.to('faf').emit('status', { status: 'Disconnected', connections: connections.length })
    console.log('Disconnected: %s sockets connected', connections.length)
  })
})
