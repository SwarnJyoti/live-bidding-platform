import React, { useEffect, useState } from "react";

function AuctionItem({ item, userId, serverOffset, now, placeBid }) {
  const [flash, setFlash] = useState(false);

  const remaining = item.auctionEndTime - (now + serverOffset);
  const isEnded = remaining <= 0;

  const isWinning = item.highestBidder === userId;
  const isOutbid = item.highestBidder !== null && item.highestBidder !== userId;

  useEffect(() => {
    if (!isEnded) {
      setFlash(true);
      const timeout = setTimeout(() => setFlash(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [item.currentBid, isEnded]);

  return (
    <div className={`card ${isWinning ? "winning" : ""}`}>
      <h3>{item.title}</h3>
      <p>Starting Price: ₹{item.startingPrice}</p>
      <p className={`price ${flash ? "flash" : ""}`}>Current Bid: ₹{item.currentBid}</p>
      <p>Time Left: {Math.max(0, Math.floor(remaining / 1000))}s</p>

      {isWinning && !isEnded && <span className="badge">Winning</span>}
      {isOutbid && !isEnded && <span className="outbid">Outbid</span>}
      {isEnded && <span className="ended">Auction Ended</span>}

      <button disabled={isEnded} onClick={() => placeBid(item.id)}>
        {isEnded ? "Auction Ended" : "Bid + ₹10"}
      </button>
    </div>
  );
}

export default AuctionItem;









