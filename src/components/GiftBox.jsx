import "../styles/GiftBox.css";
import { motion } from "framer-motion";
import { useState } from "react";
function GiftBox({ onOpen }) {
  const [opened, setOpened] = useState(false);
  return (
    <motion.div
      className="gift-container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
<div
  className={`gift-box ${opened ? "opened" : ""}`}
  onClick={() => {
    setOpened(true);
    onOpen();
  }}
>        <div className="gift-lid"></div>
        <div className="gift-body"></div>
        <div className="gift-ribbon-v"></div>
        <div className="gift-ribbon-h"></div>
      </div>

      <p>🎁 Tap the Gift to Open the Surprise</p>
    </motion.div>
  );
}

export default GiftBox;