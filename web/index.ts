import { DemoClient } from './generated/DemoServiceClientPb'
import { Connection, Message } from './generated/demo_pb';

var client = new DemoClient('http://localhost:8080');

window.addEventListener("DOMContentLoaded", function () {
    var connection = new Connection()
    var stream = client.connect(connection)
    stream.on("data", (data) => {
        console.log(data)
    })
}, false);