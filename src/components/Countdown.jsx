import { useEffect, useState } from "react";

function Countdown() {
  const birthday = new Date("2026-07-17T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(birthday - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(birthday - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(
    0,
    Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  );
  const minutes = Math.max(
    0,
    Math.floor((timeLeft / (1000 * 60)) % 60)
  );
  const seconds = Math.max(
    0,
    Math.floor((timeLeft / 1000) % 60)
  );

  return (
    <div className="countdown">
      <h2>⏳ Countdown</h2>

      <div className="time-box">
        <div>{days}<span>Days</span></div>
        <div>{hours}<span>Hours</span></div>
        <div>{minutes}<span>Minutes</span></div>
        <div>{seconds}<span>Seconds</span></div>
      </div>
    </div>
  );
}

export default Countdown;