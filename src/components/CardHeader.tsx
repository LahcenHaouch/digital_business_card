import "./CardHeader.css";

export default function CardHeader() {
  return (
    <div className="header">
      <h1>Lahcen Haouch</h1>
      <p className="job">Software Engineer</p>
      <p className="website">website: In progress</p>
      <div className="cta">
        <a href="" className="btn email">
          Email
        </a>
        <a href="" className="btn linkedin">
          Linkedin
        </a>
      </div>
    </div>
  );
}
