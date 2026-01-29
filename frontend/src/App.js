import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import AuctionItem from "./components/AuctionItem";
import "./App.css";


const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";
const socket = io(BACKEND_URL);

function App() {
  const [items, setItems] = useState([]);
  const [serverOffset, setServerOffset] = useState(0);
  const [now, setNow] = useState(Date.now());

  const [userId] = useState(() => {
    let id = localStorage.getItem("userId");
    if (!id) {
      id = Math.random().toString(36).substring(7);
      localStorage.setItem("userId", id);
    }
    return id;
  });

  useEffect(() => {
    fetch(`${BACKEND_URL}/items`)
      .then(res => res.json())
      .then(data => {
        setItems(data.items);
        setServerOffset(data.serverTime - Date.now());
      })
      .catch(err => console.error("Fetch error:", err));

    const timer = setInterval(() => setNow(Date.now()), 1000);
    socket.on("UPDATE_BID", updatedItem => {
      setItems(prev =>
        prev.map(item =>
          item.id === updatedItem.id ? updatedItem : item
        )
      );
    });

    socket.on("BID_ERROR", message => {
      alert(message);
    });

    return () => {
      clearInterval(timer);
      socket.off("UPDATE_BID");
      socket.off("BID_ERROR");
    };
  }, []);

  const placeBid = (itemId) => {
    socket.emit("BID_PLACED", { itemId, userId });
  };

  return (
    <div className="container">
      <h1>Live Bidding Platform</h1>

      <div className="grid">
        {items.map(item => (
          <AuctionItem
            key={item.id}
            item={item}
            userId={userId}
            serverOffset={serverOffset}
            now={now}
            placeBid={placeBid}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

