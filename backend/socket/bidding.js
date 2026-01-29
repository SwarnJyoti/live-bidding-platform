const items = require("../data/items");
const locks = new Set();

function biddingSocket(io) {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("BID_PLACED", ({ itemId, userId }) => {
      if (locks.has(itemId)) {
        socket.emit("BID_ERROR", "Outbid");
        return;
      }

      locks.add(itemId);
      const item = items.find(i => i.id === itemId);

      if (!item || Date.now() > item.auctionEndTime) {
        socket.emit("BID_ERROR", "Auction ended");
        locks.delete(itemId);
        return;
      }

      item.currentBid += 10;
      item.highestBidder = userId;

      io.emit("UPDATE_BID", item);

      locks.delete(itemId);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
}

module.exports = biddingSocket;


