const zmq = require("zeromq")
const constants = require('./constants')

async function run() {
  const sock = new zmq.Pull

  sock.connect(constants.address)
  console.log(`Worker connected to port ${constants.port}`)

  for await (const [msg] of sock) {
    console.log("work: %s", msg.toString())
  }
}

run()