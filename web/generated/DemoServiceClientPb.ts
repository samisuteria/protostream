/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as demo_pb from './demo_pb';


export class DemoClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoConnect = new grpcWeb.AbstractClientBase.MethodInfo(
    demo_pb.Message,
    (request: demo_pb.Connection) => {
      return request.serializeBinary();
    },
    demo_pb.Message.deserializeBinary
  );

  connect(
    request: demo_pb.Connection,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/Demo/Connect',
      request,
      metadata || {},
      this.methodInfoConnect);
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    demo_pb.Empty,
    (request: demo_pb.Message) => {
      return request.serializeBinary();
    },
    demo_pb.Empty.deserializeBinary
  );

  update(
    request: demo_pb.Message,
    metadata: grpcWeb.Metadata | null): Promise<demo_pb.Empty>;

  update(
    request: demo_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: demo_pb.Empty) => void): grpcWeb.ClientReadableStream<demo_pb.Empty>;

  update(
    request: demo_pb.Message,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: demo_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Demo/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Demo/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoDisconnect = new grpcWeb.AbstractClientBase.MethodInfo(
    demo_pb.Empty,
    (request: demo_pb.Connection) => {
      return request.serializeBinary();
    },
    demo_pb.Empty.deserializeBinary
  );

  disconnect(
    request: demo_pb.Connection,
    metadata: grpcWeb.Metadata | null): Promise<demo_pb.Empty>;

  disconnect(
    request: demo_pb.Connection,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: demo_pb.Empty) => void): grpcWeb.ClientReadableStream<demo_pb.Empty>;

  disconnect(
    request: demo_pb.Connection,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: demo_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Demo/Disconnect',
        request,
        metadata || {},
        this.methodInfoDisconnect,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Demo/Disconnect',
    request,
    metadata || {},
    this.methodInfoDisconnect);
  }

}

