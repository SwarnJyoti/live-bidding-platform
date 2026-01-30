##How the Live Bidding Works

1. Open the Vercel deployment link in your browser.
   Live bidding platform Application link: https://live-bidding-platform-p95m.vercel.app/
3. The auction starts automatically when the page loads.
4. Each product shows the current bid, remaining time, and bid status.

##Note:
** Testing with Multiple Users
1. Open the same Vercel link in two different browsers (or incognito mode).
2. Each browser acts as a different user.
3. When one user places a bid, the update appears instantly for the other user.
4. If another user bids higher, the previous bidder sees "Outbid" while the current bidder sees
"Winning".

##Consecutive Bid Prevention
A single user cannot place consecutive bids on the same item. Another user must bid before the
first user can bid again.

##Auction Timer
Each auction runs for a fixed duration. When the timer ends, bidding is disabled and the status
changes to "Auction Ended".
