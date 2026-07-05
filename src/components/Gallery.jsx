import "../styles/Gallery.css";
function Gallery() {
  return (
    <section className="gallery">

      <h2>📸 Our Beautiful Memories</h2>

      <div className="gallery-grid">

        <img src="/photo1.jpeg" alt="Memory 1" />
        <img src="/photo2.jpeg" alt="Memory 2" />
        <img src="/photo3.jpeg" alt="Memory 3" />
        <img src="/photo4.jpeg" alt="Memory 4" />

      </div>

    </section>
  );
}

export default Gallery;