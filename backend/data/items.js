const AUCTION_DURATION_MS = 5 * 60 * 1000; 

function createItems() {
  const now = Date.now();

  return [
    {
      id: "1",
      title: "MacBook Pro",
      startingPrice: 500,
      currentBid: 500,
      auctionStartTime: now,
      auctionEndTime: now + AUCTION_DURATION_MS,
      highestBidder: null,
      lastBidder: null
    },
    {
      id: "2",
      title: "iPhone 15",
      startingPrice: 300,
      currentBid: 300,
      auctionStartTime: now,
      auctionEndTime: now + AUCTION_DURATION_MS,
      highestBidder: null,
      lastBidder: null
    },
    {
      id: "3",
      title: "Apple Microphone",
      startingPrice: 400,
      currentBid: 400,
      auctionStartTime: now,
      auctionEndTime: now + AUCTION_DURATION_MS,
      highestBidder: null,
      lastBidder: null
    },
    {
      id: "4",
      title: "Apple Watch",
      startingPrice: 200,
      currentBid: 200,
      auctionStartTime: now,
      auctionEndTime: now + AUCTION_DURATION_MS,
      highestBidder: null,
      lastBidder: null
    }
  ];
}

const items = createItems();
module.exports = items;
