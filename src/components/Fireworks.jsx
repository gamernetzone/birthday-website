import { useEffect } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function Fireworks({ trigger }) {
  let ref = null;

  const getInstance = (instance) => {
    ref = instance;
  };

  useEffect(() => {
    if (!trigger || !ref) return;

    ref({
      particleCount: 180,
      spread: 120,
      origin: { y: 0.6 },
    });
  }, [trigger]);

  return (
    <ReactCanvasConfetti
      onInit={({ confetti }) => {
        ref = confetti;
      }}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}

export default Fireworks;