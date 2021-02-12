// package: 
// file: demo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as demo_pb from "./demo_pb";

interface IDemoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    connect: IDemoService_IConnect;
    update: IDemoService_IUpdate;
    disconnect: IDemoService_IDisconnect;
}

interface IDemoService_IConnect extends grpc.MethodDefinition<demo_pb.Connection, demo_pb.Message> {
    path: "/Demo/Connect";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<demo_pb.Connection>;
    requestDeserialize: grpc.deserialize<demo_pb.Connection>;
    responseSerialize: grpc.serialize<demo_pb.Message>;
    responseDeserialize: grpc.deserialize<demo_pb.Message>;
}
interface IDemoService_IUpdate extends grpc.MethodDefinition<demo_pb.Message, demo_pb.Empty> {
    path: "/Demo/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<demo_pb.Message>;
    requestDeserialize: grpc.deserialize<demo_pb.Message>;
    responseSerialize: grpc.serialize<demo_pb.Empty>;
    responseDeserialize: grpc.deserialize<demo_pb.Empty>;
}
interface IDemoService_IDisconnect extends grpc.MethodDefinition<demo_pb.Connection, demo_pb.Empty> {
    path: "/Demo/Disconnect";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<demo_pb.Connection>;
    requestDeserialize: grpc.deserialize<demo_pb.Connection>;
    responseSerialize: grpc.serialize<demo_pb.Empty>;
    responseDeserialize: grpc.deserialize<demo_pb.Empty>;
}

export const DemoService: IDemoService;

export interface IDemoServer extends grpc.UntypedServiceImplementation {
    connect: grpc.handleServerStreamingCall<demo_pb.Connection, demo_pb.Message>;
    update: grpc.handleUnaryCall<demo_pb.Message, demo_pb.Empty>;
    disconnect: grpc.handleUnaryCall<demo_pb.Connection, demo_pb.Empty>;
}

export interface IDemoClient {
    connect(request: demo_pb.Connection, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<demo_pb.Message>;
    connect(request: demo_pb.Connection, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<demo_pb.Message>;
    update(request: demo_pb.Message, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
    update(request: demo_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
    update(request: demo_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
    disconnect(request: demo_pb.Connection, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
    disconnect(request: demo_pb.Connection, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
    disconnect(request: demo_pb.Connection, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class DemoClient extends grpc.Client implements IDemoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public connect(request: demo_pb.Connection, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<demo_pb.Message>;
    public connect(request: demo_pb.Connection, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<demo_pb.Message>;
    public update(request: demo_pb.Message, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
    public update(request: demo_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
    public update(request: demo_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
    public disconnect(request: demo_pb.Connection, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
    public disconnect(request: demo_pb.Connection, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
    public disconnect(request: demo_pb.Connection, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: demo_pb.Empty) => void): grpc.ClientUnaryCall;
}
