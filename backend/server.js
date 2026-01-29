const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const items = require("./data/items");
const biddingSocket = require("./socket/bidding");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.get("/items", (req, res) => {
  const simplifiedItems = items.map(
    ({ id, title, startingPrice, currentBid, auctionEndTime, highestBidder }) => ({
      id, title, startingPrice, currentBid, auctionEndTime, highestBidder
    })
  );
  res.json({ serverTime: Date.now(), items: simplifiedItems });
});


biddingSocket(io);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);


