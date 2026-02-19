import "../styles/Resume.css";

export default function Resume() {
  return (
    <div className="resume">

      {/* TITLE */}
      <h1 className="resume-title">Resume</h1>

      {/* SUBTITLE */}
      <p className="resume-sub">
        A summary of my education, work history, credentials, and
        other accomplishments and skills
      </p>

      {/* TIMELINE */}
      <div className="timeline">

        {/* ITEM */}
        <div className="row">
          <div className="year">2015-2016</div>

          <div className="details">
            <h3>IT Staff and Operations</h3>
            <p className="company">Burdeyn Hospital</p>

            <ul>
              <li>Maintain the hospital network with CISCO-standards</li>
              <li>Mikrotik configurations on routers</li>
              <li>Troubleshoot the employee’s computers</li>
            </ul>
          </div>
        </div>

        {/* ITEM */}
        <div className="row">
          <div className="year">2016-2018</div>

          <div className="details">
            <h3>WordPress Developer</h3>
            <p className="company">Fortunel Studio</p>

            <ul>
              <li>Create a SEO Plugin based on PHP 7.2</li>
              <li>Maintain clients website</li>
              <li>Build and deploy for client area services</li>
            </ul>
          </div>
        </div>

        {/* ITEM */}
        <div className="row">
          <div className="year">2018-2020</div>

          <div className="details">
            <h3>UI Designer</h3>
            <p className="company">Matic Job Ltd.</p>

            <ul>
              <li>Brainstorming ideas to design</li>
              <li>Create wireframe and design systems</li>
              <li>Create micro-interactions with Figma</li>
              <li>Create hand-off documents</li>
              <li>Redesign old website with minimalism style</li>
            </ul>
          </div>
        </div>

        {/* ITEM */}
        <div className="row">
          <div className="year">2020-present</div>

          <div className="details">
            <h3>Senior Product Designer</h3>
            <p className="company">Kali Network Ltd.</p>

            <ul>
              <li>Manage company PDM management system</li>
              <li>Design & rout HVAC ductwork using REVIT</li>
              <li>Create working prototypes for new concept designs</li>
              <li>Collaborate closely with developers, copywriters and UX designers</li>
              <li>Research on new design trends</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}
