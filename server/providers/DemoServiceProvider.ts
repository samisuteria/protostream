import { handleServerStreamingCall, handleUnaryCall, sendUnaryData, ServerUnaryCall, ServerWritableStream } from '@grpc/grpc-js';
import { IDemoServer } from '../generated/demo_grpc_pb'
import { Connection, Message, Empty } from '../generated/demo_pb'

export class DemoServiceProvider implements IDemoServer {
    [name: string]: import("@grpc/grpc-js/build/src/server-call").HandleCall<any, any>;

    connect(call: ServerWritableStream<Connection, Message>) {
        setInterval(() => {
            const message = new Message()
            message.setClientid("something")
            message.setMessage("some message")
            call.write(message)
        }, 500);
    }

    update(call: ServerUnaryCall<Message, Empty>, callback: sendUnaryData<Empty>) {
        const empty = new Empty()
        callback(null, empty);
    }

    disconnect(call: ServerUnaryCall<Connection, Empty>, callback: sendUnaryData<Empty>) {
        const empty = new Empty()
        callback(null, empty);
    }
}