import "./box.css";
import "../App.js";

function Box({ farbe }) {
  return (
    
      <div
        className="flex"
        style={{
          backgroundColor: farbe,
          width: "100px",
          height: "100px",
          margin: "10px",
        }}
      >
    </div>
  );
}

export default Box;
