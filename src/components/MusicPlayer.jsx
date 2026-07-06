function MusicPlayer() {
  return (
    <div className="music-player">
      <h3>🎵 Birthday Music</h3>

      <audio controls>
        <source src="/birthday.mp3" type="audio/mpeg" />
        Your browser does not support audio.
      </audio>
    </div>
  );
}

export default MusicPlayer;