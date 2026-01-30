const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const { getItems } = require("./data/items");
const biddingSocket = require("./socket/bidding");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.get("/items", (req, res) => {
  const items = getItems();

  res.json({
    serverTime: Date.now(),
    items: items.map(item => ({
      ...item,
      status: Date.now() > item.auctionEndTime ? "ENDED" : "LIVE"
    }))
  });
});

biddingSocket(io);

server.listen(process.env.PORT || 4000, () =>
  console.log("Server running")
);
