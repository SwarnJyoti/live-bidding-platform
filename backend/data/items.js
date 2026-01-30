const AUCTION_DURATION_MS = 5 * 60 * 1000;

let items = [];
let auctionStartedAt = null;

function createAuction() {
  const now = Date.now();
  auctionStartedAt = now;

  items = [
    {
      id: "1",
      title: "MacBook Pro",
      startingPrice: 500,
      currentBid: 500,
      auctionEndTime: now + AUCTION_DURATION_MS,
      highestBidder: null,
      lastBidder: null
    },
    {
      id: "2",
      title: "iPhone 15",
      startingPrice: 300,
      currentBid: 300,
      auctionEndTime: now + AUCTION_DURATION_MS,
      highestBidder: null,
      lastBidder: null
    },
    {
      id: "3",
      title: "Apple Watch",
      startingPrice: 200,
      currentBid: 200,
      auctionEndTime: now + AUCTION_DURATION_MS,
      highestBidder: null,
      lastBidder: null
    },
    {
      id: "4",
      title: "Sony Headphones",
      startingPrice: 250,
      currentBid: 250,
      auctionEndTime: now + AUCTION_DURATION_MS,
      highestBidder: null,
      lastBidder: null
    }
  ];
}

function getItems() {
  if (!auctionStartedAt || Date.now() > items[0].auctionEndTime) {
    createAuction();
  }
  return items;
}

module.exports = { getItems };
