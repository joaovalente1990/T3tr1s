import { Server } from "https";

class socket {
  io: any;

  init(httpServer: Server) {
    this.io = require("socket.io")(httpServer);
    return this.io;
  }

  getIO() {
    if (!this.io) {
      throw new Error("Socket.io not initialized!");
    }
    return this.io;
  }
}

export default new socket();
