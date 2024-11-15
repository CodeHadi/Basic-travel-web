import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section className="travel-guide">
        <h1 className="section-title">Explore the World with Our Travel Guide</h1>
        <div className="guides">
          <div className="guide-card">
            <Image
              src="/mountains.jpg" // Correct path, no "/public/"
              alt="Mountain Adventure"
              width={300}
              height={200}
              className="guide-image"
            />
            <h2 className="guide-title">Mountain Adventures</h2>
            <p className="guide-description">
              Discover breathtaking mountain views and thrilling hikes.
            </p>
          </div>
          <div className="guide-card">
            <Image
              src="/beach.jpg" // Correct path
              alt="Beach Retreat"
              width={300}
              height={200}
              className="guide-image"
            />
            <h2 className="guide-title">Beach Retreats</h2>
            <p className="guide-description">
              Relax on serene beaches with golden sands and crystal-clear waters.
            </p>
          </div>
          <div className="guide-card">
            <Image
              src="/city.jpg" // Correct path
              alt="City Tours"
              width={300}
              height={200}
              className="guide-image"
            />
            <h2 className="guide-title">City Tours</h2>
            <p className="guide-description">
              Immerse yourself in culture, history, and modern cityscapes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
  