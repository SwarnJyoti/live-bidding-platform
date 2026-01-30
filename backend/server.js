const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const items = require("./data/items");
const biddingSocket = require("./socket/bidding");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.get("/items", (req, res) => {
  const response = items.map(item => ({
    ...item,
    status: Date.now() >= item.auctionEndTime ? "ENDED" : "LIVE"
  }));

  res.json({
    serverTime: Date.now(),
    items: response
  });
});

biddingSocket(io);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
