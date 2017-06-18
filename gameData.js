let clients = []
let targets = []
let bombs = []


function getRandomColor(busyColors) {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)]
  }
  if (busyColors.indexOf(color) == -1) {
    return color
  } else {
    getRandomColor(busyColors)
  }

}

function updateClients(clientData) {
  clientColor = clientData.color
  let getClient = clientColor => {
    return clients.filter(function(obj) {
      return obj.color === clientColor
    })
    clients.splice(clients.indexOf(getClient), 1)
    clients.push(clientData)
  }
}

function updateTargets(newTargets) {
  targets = newTargets
}

function updateBombs(bombData) {
  bombColor = bombData.color
  let getBomb = bombColor => {
    return bombs.filter(function(obj) {
      return obj.color === bombColor
    })
    bombs.splice(bombs.indexOf(getBomb), 1)
    bombs.push(bombData)
  }
}

function getClients() {
  return clients
}

function getTargets() {
  return targets
}

function getBombs() {
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
