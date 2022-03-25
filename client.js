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
const userProto = grpc.loadPackageDefinition(packageDefinition).User;

function main() {
  const target = "localhost:50051";
  const client = new userProto(target, grpc.credentials.createInsecure());
  const userRequest = {
    _id: "Sample _Id",
  };
  client.GetUser(userRequest, function (err, response) {
    console.log("Greeting:", response);
  });
}

main();
