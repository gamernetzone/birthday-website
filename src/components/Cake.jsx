import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "../styles/Cake.css";

function Cake() {
  const [blown, setBlown] = useState(false);

  return (
    <section className="cake-section">
  {blown && (
  <Confetti
    width={window.innerWidth}
    height={window.innerHeight}
    numberOfPieces={500}
    recycle={false}
  />
)}

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        🎂 Make a Birthday Wish
      </motion.h2>

      <motion.div
        className="cake"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setBlown(true)}
      >
        <div className="candle">
          {!blown && <div className="flame"></div>}
        </div>

        <div className="cake-body">
          <div className="icing"></div>

          <div className="sprinkles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </motion.div>

      <motion.p
        key={blown ? "yes" : "no"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {blown
          ? "🎉 Happy Birthday! May every wish come true ❤️"
          : "👆 Tap the cake to blow the candle"}
      </motion.p>

    </section>
  );
}

export default Cake;