const now = Date.now(); 
const AUCTION_DURATION_MS = 5 * 60 * 1000; 

const items = [
  {
    id: "1",
    title: "MacBook Pro",
    startingPrice: 500,
    currentBid: 500,
    auctionEndTime: now + AUCTION_DURATION_MS,
    highestBidder: null
  },
  {
    id: "2",
    title: "iPhone 15",
    startingPrice: 300,
    currentBid: 300,
    auctionEndTime: now + AUCTION_DURATION_MS,
    highestBidder: null
  },
  {
    id: "3",
    title: "Apple Microphone",
    startingPrice: 400,
    currentBid: 400,
    auctionEndTime: now + AUCTION_DURATION_MS,
    highestBidder: null
  },
  {
    id: "4",
    title: "Apple Watch",
    startingPrice: 200,
    currentBid: 200,
    auctionEndTime: now + AUCTION_DURATION_MS,
    highestBidder: null
  },
  {
    id: "5",
    title: "Samsung Galaxy S24",
    startingPrice: 350,
    currentBid: 350,
    auctionEndTime: now + AUCTION_DURATION_MS,
    highestBidder: null
  },
  {
    id: "6",
    title: "Sony Headphones",
    startingPrice: 250,
    currentBid: 250,
    auctionEndTime: now + AUCTION_DURATION_MS,
    highestBidder: null
  },
  {
    id: "7",
    title: "iPad Pro",
    startingPrice: 450,
    currentBid: 450,
    auctionEndTime: now + AUCTION_DURATION_MS,
    highestBidder: null
  },
  {
    id: "8",
    title: "Dell Laptop",
    startingPrice: 420,
    currentBid: 420,
    auctionEndTime: now + AUCTION_DURATION_MS,
    highestBidder: null
  },
  {
    id: "9",
    title: "Apple Earbuds",
    startingPrice: 280,
    currentBid: 280,
    auctionEndTime: now + AUCTION_DURATION_MS,
    highestBidder: null
  },
  {
    id: "10",
    title: "Lenovo Laptop",
    startingPrice: 150,
    currentBid: 150,
    auctionEndTime: now + AUCTION_DURATION_MS,
    highestBidder: null
  }
];

module.exports = items;
