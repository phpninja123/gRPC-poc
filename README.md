# gRPC POC

In this POC, I'm trying to establish a communication between gRPC client & server. So when you start gRPC server, it
will start listening to localhost on port 50051. The client will request the user info to the server running on port
50051 by providing _id and in return client should get the user object containing _id & name

## gRPC Server

```
> node server.js
```

## gRPC Client

```
> node client.js
```

