import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">

      {/* TITLE */}
      <h1 className="contact-title">Contact</h1>

      {/* SUBTITLE */}
      <p className="contact-sub">Let’s Chat!</p>

      {/* FORM */}
      <div className="contact-form">

        {/* NAME + TITLE */}
        <div className="row">
          <div className="field">
            <label>Name *</label>
            <input type="text" placeholder="Joao Felix" />
          </div>

          <div className="field small">
            <label>Title *</label>
            <select>
              <option>Select</option>
              <option>Mr</option>
              <option>Ms</option>
            </select>
          </div>
        </div>

        {/* EMAIL */}
        <div className="field">
          <label>Email *</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        {/* MESSAGE */}
        <div className="field">
          <label>Message *</label>
          <textarea placeholder="Anything I can help? Let me know"></textarea>
        </div>

        {/* BUTTON */}
        <button className="send-btn">Send</button>

      </div>

    </div>
  );
}
