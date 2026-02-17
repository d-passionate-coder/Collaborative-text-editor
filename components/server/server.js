import { Server } from "@hocuspocus/server";

const server = new Server({
  port: process.env.PORT || 10000,
  address: "0.0.0.0",
});

server.listen();

//console.log("✅ Hocuspocus Server running at ws://127.0.0.1:1234");
