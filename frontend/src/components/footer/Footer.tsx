import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          Built With love by
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://in.linkedin.com/in/adithya-s-a75aa4126"}
            >
              Adithya
            </Link>
          </span>
          💘
        </p>
      </div>
    </footer>
  );
};

export default Footer;
