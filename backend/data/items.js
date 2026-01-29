const AUCTION_DURATION_MS = 5 * 60 * 1000; 

const baseItems = [
  {
    id: "1",
    title: "MacBook Pro",
    startingPrice: 500
  },
  {
    id: "2",
    title: "iPhone 15",
    startingPrice: 300
  },
  {
    id: "3",
    title: "Apple Microphone",
    startingPrice: 400
  },
  {
    id: "4",
    title: "Apple Watch",
    startingPrice: 200
  },
  {
    id: "5",
    title: "Samsung Galaxy S24",
    startingPrice: 350
  },
  {
    id: "6",
    title: "Sony Headphones",
    startingPrice: 250
  },
  {
    id: "7",
    title: "iPad Pro",
    startingPrice: 450
  },
  {
    id: "8",
    title: "Dell Laptop",
    startingPrice: 420
  },
  {
    id: "9",
    title: "Apple Earbuds",
    startingPrice: 280
  },
  {
    id: "10",
    title: "Lenovo Laptop",
    startingPrice: 150
  }
];

const items = baseItems.map(item => ({
  id: item.id,
  title: item.title,
  startingPrice: item.startingPrice,
  currentBid: item.startingPrice,
  highestBidder: null,
  auctionEndTime: Date.now() + AUCTION_DURATION_MS
}));

module.exports = {
  items,
  AUCTION_DURATION_MS
};
