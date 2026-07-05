import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Letter.css";

function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <section className="letter">
      <h2>💌 A Letter For You</h2>

      {!open ? (
        <motion.div
          className="envelope"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
        >
          <div className="envelope-flap"></div>
          <div className="envelope-body"></div>
          <p>Click to Open ❤️</p>
        </motion.div>
      ) : (
        <motion.div
          className="letter-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Dear Saksham,
            <br /><br />

            Happy Birthday! 🎉
            <br /><br />

            I hope this year brings you endless happiness, success,
            laughter and unforgettable memories.

            <br /><br />

            Thank you for always being such an amazing person.
            You truly deserve all the love, joy and success in the world. ❤️

            <br /><br />

            Never stop smiling.
            Never stop dreaming.

            <br /><br />

            Wishing you the happiest birthday ever! 🎂🎈✨
          </p>
        </motion.div>
      )}
    </section>
  );
}

export default Letter;