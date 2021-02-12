#!/bin/zsh

PROTO_DIR=../idl
PROTO_OUT_DIR=./generated

# Generate JavaScript code
protoc ${PROTO_DIR}/*.proto \
    --proto_path=${PROTO_DIR} \
    --js_out=import_style=commonjs:${PROTO_OUT_DIR} \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${PROTO_OUT_DIR}

# Generate TypeScript GRPC
protoc ${PROTO_DIR}/*.proto \
    --proto_path=${PROTO_DIR} \
    --js_out=import_style=commonjs:${PROTO_OUT_DIR} \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTO_OUT_DIR}