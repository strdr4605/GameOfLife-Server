let clients = {}

// clients = {
//   color: {
//     color: '#cccccc',
//     position: {
//       x: 0,
//       y: 0
//     },
//     life: 0
//   }
// }

let targets = []
let bombs = {}

// bombs = {
//  color {
//     position: {
//       x: 0,
//       y: 0
//     },
//     time: 0
//   }
// }


function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function updateClients(clientColor, clientData) {
  clients[clientColor] = clientData
}

function updateTargets(newTargets) {
  targets = newTargets
}

function updateBombs(clientColor, bombData) {
  bombs[clientColor] = bombData
}

function getClients() {
  return clients
}

function getTargets() {
  return targets
}

function getBombs(clientId, bombData) {
  return bombs
}

module.exports = {
  getRandomColor,
  updateClients,
  updateTargets,
  updateBombs,
  getClients,
  getTargets,
  getBombs
}
