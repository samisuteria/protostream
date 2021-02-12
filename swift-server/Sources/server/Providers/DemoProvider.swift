import GRPC
import NIO

class _DemoProvider: DemoProvider {
    var interceptors: DemoServerInterceptorFactoryProtocol? { nil }
    
    func connect(request: Connection, context: StreamingResponseCallContext<Message>) -> EventLoopFuture<GRPCStatus> {
        let promise = context.eventLoop.makePromise(of: GRPCStatus.self)
        
        context.eventLoop.scheduleRepeatedTask(initialDelay: .zero, delay: .milliseconds(500)) { (task) in
            let message = Message.with {
                $0.clientID = "some client id"
                $0.message = "some message"
            }
            
            _ = context.sendResponse(message)
        }
        
        return promise.futureResult
    }
    
    func update(request: Message, context: StatusOnlyCallContext) -> EventLoopFuture<Empty> {
        return context.eventLoop.makeSucceededFuture(Empty())
    }
    
    func disconnect(request: Connection, context: StatusOnlyCallContext) -> EventLoopFuture<Empty> {
        return context.eventLoop.makeSucceededFuture(Empty())
    }
}
