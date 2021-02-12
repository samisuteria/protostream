build-protoc-gen-swift:
	swift build --configuration=release --product protoc-gen-swift
	cp ./.build/release/protoc-gen-swift ./Tools

build-protoc-gen-grpc-swift:
	swift build --configuration=release --product protoc-gen-grpc-swift
	cp ./.build/release/protoc-gen-grpc-swift ./Tools

generate-models:
	protoc ../idl/*.proto \
	--proto_path=../idl \
	--plugin=./Tools/protoc-gen-swift \
	--swift_opt=Visibility=Public \
	--swift_out=Sources/Server/Generated \
	--plugin=./Tools/protoc-gen-grpc-swift \
	--grpc-swift_opt=Visibility=Public \
	--grpc-swift_out=Sources/Server/Generated
