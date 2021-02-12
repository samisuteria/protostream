import { Server, ServerCredentials } from '@grpc/grpc-js'
import { DemoService } from './generated/demo_grpc_pb'
import { DemoServiceProvider } from './providers/DemoServiceProvider';

const server = new Server()
server.addService(DemoService, new DemoServiceProvider())

server.bindAsync('0.0.0.0:3000', ServerCredentials.createInsecure(), (error, port) => {
    if (error != null) {
        console.log(error)
        return
    }

    console.log(`server started on ${port}`)
    server.start()
})