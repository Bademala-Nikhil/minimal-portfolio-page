import { useRef } from "react";
import "../styles/Gallery.css";

export default function Gallery() {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -520,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 520,
      behavior: "smooth",
    });
  };

  return (
    <div className="gallery">

      {/* Arrows */}
      <div className="arrows">
        <button onClick={scrollLeft}>←</button>
        <button onClick={scrollRight}>→</button>
      </div>

      {/* Images */}
      <div className="images" ref={scrollRef}>

        <div className="img-card">
          <img src="https://picsum.photos/500/350?1" alt="" />
          <div className="overlay">view project</div>
        </div>

        <div className="img-card">
          <img src="https://picsum.photos/500/350?2" alt="" />
          <div className="overlay">view project</div>
        </div>

        <div className="img-card">
          <img src="https://picsum.photos/500/350?3" alt="" />
          <div className="overlay">view project</div>
        </div>

        <div className="img-card">
          <img src="https://picsum.photos/500/350?4" alt="" />
          <div className="overlay">view project</div>
        </div>

      </div>

    </div>
  );
}
