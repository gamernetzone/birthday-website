function MusicPlayer() {
  const handlePlay = () => {
    document.getElementById('audio').play();
  };

  return (
    <div className="music-player">
      <h3><FaMusic /> Birthday Music</h3>
      <button onClick={handlePlay}>
        Play Music
      </button>
      <audio id="audio" loop>
        <source src="/birthday.mp3" type="audio/mpeg" />
        Your browser does not support audio.
      </audio>
    </div>
  );
}

export default MusicPlayer;