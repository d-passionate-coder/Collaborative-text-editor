import { Server } from "@hocuspocus/server";

const server = new Server({
  port: 1234,
  address: "https://collaborative-text-editor-1-qqgq.onrender.com",
});

server.listen();

//console.log("✅ Hocuspocus Server running at ws://127.0.0.1:1234");
