import "../styles/Work.css";

export default function Works() {
  return (
    <div className="works" id="works">

      {/* HEADLINE */}
      <h1 className="works-title">Works</h1>

      {/* SUBTEXT */}
      <p className="works-sub">
        Repository of projects that I worked before.
      </p>

      {/* FILTER MENU */}
      <div className="works-menu">
        <span className="active">All</span>
        <span>Product Design</span>
        <span>UX Research</span>
        <span>Logo</span>
        <span>Desk Design</span>
        <span>Webflow</span>
        <span>Social Media</span>
        <span>Video Effect</span>
        <span>Non Profit</span>
      </div>

      {/* GRID */}
      <div className="works-grid">

        {[1,2,3,4,5,6,7,8,9].map((item) => (
          <div className="work-card" key={item}>
            <img
              src={`https://picsum.photos/400/300?random=${item}`}
              alt=""
            />
          </div>
        ))}

      </div>

    </div>
  );
}
