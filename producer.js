const zmq = require("zeromq")
const constants = require('./constants')

async function run() {
  const sock = new zmq.Push

  await sock.bind(constants.address)
  console.log(`Producer bound to port ${constants.port}`)

  while (true) {
    await sock.send("some work")
    await new Promise(resolve => setTimeout(resolve, 1500))
  }
}

run()