import "./About.css";
import yash from "../../assets/yash.png";
import manas from "../../assets/manas.jpeg";

function About() {
  return (
    <section id="about">
      <div className="card-container">
        <div className="card">
          <img src={yash} className="card-img" alt="Yash" />
          <h1 className="name">Yash</h1>
        </div>
        <div className="card">
          <img src={manas} className="card-img" alt="Manas" />
          <h1 className="name">Manas</h1>
        </div>
      </div>
      <div className="card company-card">
        <h1 className="company-name">Company XYZ</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor, erat non sagittis interdum, urna erat vehicula justo, eget cursus lacus leo at nisi. Integer et nulla et felis gravida scelerisque.</p>
      </div>
    </section>
  );
}

export default About;
