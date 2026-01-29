const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const { items, AUCTION_DURATION_MS } = require("./data/items");
const biddingSocket = require("./socket/bidding");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

app.get("/items", (req, res) => {
  const now = Date.now();

  items.forEach(item => {
    if (now > item.auctionEndTime) {
      item.currentBid = item.startingPrice;
      item.highestBidder = null;
      item.auctionEndTime = now + AUCTION_DURATION_MS;
    }
  });

  res.json({
    serverTime: now,
    items
  });
});

biddingSocket(io);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
