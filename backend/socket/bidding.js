const { getItems } = require("../data/items");
const locks = new Set();

function biddingSocket(io) {
  io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("BID_PLACED", ({ itemId, userId }) => {
      const items = getItems();
      const item = items.find(i => i.id === itemId);

      if (!item) {
        socket.emit("BID_ERROR", "Outbid");
        return;
      }

      if (Date.now() > item.auctionEndTime) {
        socket.emit("BID_ERROR", "Auction ended");
        return;
      }

      if (item.lastBidder === userId) {
        socket.emit("BID_ERROR", "You cannot bid twice in a row");
        return;
      }

      item.currentBid += 10;
      item.lastBidder = userId;
      item.highestBidder = userId;

      io.emit("UPDATE_BID", item);
    });
  });
}

module.exports = biddingSocket;
