// swift-tools-version:5.3
import PackageDescription

let package = Package(name: "Server")

package.dependencies = [
    .package(url: "https://github.com/grpc/grpc-swift", .exact("1.0.0"))
]

package.targets = [
    .target(name: "Server", dependencies: [
        .product(name: "GRPC", package: "grpc-swift")
    ])
]

package.products = [
    .executable(name: "Server", targets: ["Server"])
]
