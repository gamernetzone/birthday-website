import { FaMusic } from "react-icons/fa";
function MusicPlayer() {
return (
  <div className="music-player">

    <h3>
      <FaMusic /> Birthday Music
    </h3>

    <audio autoPlay loop controls>
      <source src="/birthday.mp3" type="audio/mpeg" />
      Your browser does not support audio.
    </audio>

  </div>
);
}

export default MusicPlayer;