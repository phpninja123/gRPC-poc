const PROTO_PATH = "./protos/user.proto";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const user_proto = grpc.loadPackageDefinition(packageDefinition).User;

function getServerUser(call, callback) {
  const _id = call.request._id;
  const response = {
    _id,
    name: "Pankaj Swami",
  };
  callback(null, response);
}

function main() {
  const server = new grpc.Server();
  server.addService(user_proto.service, { GetUser: getServerUser });
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
}

main();
