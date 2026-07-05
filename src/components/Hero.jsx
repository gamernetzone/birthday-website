import "../styles/Hero.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";
import GiftBox from "./GiftBox";
import MusicPlayer from "./MusicPlayer";
import Gallery from "./Gallery";
import Letter from "./Letter";
import Cake from "./Cake";
import Timeline from "./Timeline";
import CursorGlow from "./CursorGlow";

function Hero() {
  const [opened, setOpened] = useState(false);

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <CursorGlow />
      <div className="hearts">
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>💗</span>
        <span>💝</span>
      </div>

      <div className="hero-card">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          🎉 Happy Birthday Saksham 🎂
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Today is your special day! ❤️
          <br />
          I made something special just for you.
        </motion.p>

        <GiftBox onOpen={() => setOpened(true)} />

        {opened && (
          <div className="surprise-card">
            <h2>🎉 Happy Birthday Saksham! 🎉</h2>

            <p>
              This is just the beginning...
              <br />
              A lot more surprises are waiting for you ❤️
            </p>
          </div>
        )}

       <Countdown />
<MusicPlayer />
<Gallery />
<Letter />
<Cake />
<Timeline />
      </div>
    </motion.section>
  );
}

export default Hero;