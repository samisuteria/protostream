#!/bin/zsh

PROTO_DIR=../idl
PROTO_OUT_DIR=./generated

# Generate JavaScript code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_OUT_DIR} \
    --grpc_out=grpc_js:${PROTO_OUT_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ${PROTO_DIR} \
    ${PROTO_DIR}/*.proto

# Generate TypeScript code (d.ts)
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${PROTO_OUT_DIR} \
    -I ${PROTO_DIR} \
    ${PROTO_DIR}/*.proto