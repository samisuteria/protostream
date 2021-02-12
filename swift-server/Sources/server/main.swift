import GRPC
import NIO

let group = MultiThreadedEventLoopGroup(numberOfThreads: 1)
defer { try! group.syncShutdownGracefully() }

enum ServerError: Error {
    case noAddress
}

let server = Server
    .insecure(group: group)
    .withServiceProviders([
        _DemoProvider()
    ])
    .bind(host: "0.0.0.0", port: 3000)

server
    .map { $0.channel.localAddress }
    .unwrap(orError: ServerError.noAddress)
    .whenComplete { (result) in
        switch result {
        case .success(let address):
            print("server starting on: \(address.port ?? 0)")
        case .failure(let error):
            print("error: \(error)")
        }
    }

_ = try server
    .flatMap { $0.onClose }
    .wait()
