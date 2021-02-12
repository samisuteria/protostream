// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var demo_pb = require('./demo_pb.js');

function serialize_Connection(arg) {
  if (!(arg instanceof demo_pb.Connection)) {
    throw new Error('Expected argument of type Connection');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Connection(buffer_arg) {
  return demo_pb.Connection.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Empty(arg) {
  if (!(arg instanceof demo_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return demo_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Message(arg) {
  if (!(arg instanceof demo_pb.Message)) {
    throw new Error('Expected argument of type Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Message(buffer_arg) {
  return demo_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var DemoService = exports.DemoService = {
  connect: {
    path: '/Demo/Connect',
    requestStream: false,
    responseStream: true,
    requestType: demo_pb.Connection,
    responseType: demo_pb.Message,
    requestSerialize: serialize_Connection,
    requestDeserialize: deserialize_Connection,
    responseSerialize: serialize_Message,
    responseDeserialize: deserialize_Message,
  },
  update: {
    path: '/Demo/Update',
    requestStream: false,
    responseStream: false,
    requestType: demo_pb.Message,
    responseType: demo_pb.Empty,
    requestSerialize: serialize_Message,
    requestDeserialize: deserialize_Message,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
  disconnect: {
    path: '/Demo/Disconnect',
    requestStream: false,
    responseStream: false,
    requestType: demo_pb.Connection,
    responseType: demo_pb.Empty,
    requestSerialize: serialize_Connection,
    requestDeserialize: deserialize_Connection,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
};

exports.DemoClient = grpc.makeGenericClientConstructor(DemoService);
