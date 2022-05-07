import React from "react";
import { render } from "react-dom";
import Clock from "react-live-clock";
import JG from "./JG";
import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  backgroundColor: "#272a34",
  height: "97vh"
};

const bannerStyle = {
  position: "absolute",
  bottom: 0,
  backgroundColor: "#272a34",
  height: "110px",
  width: "100%",
  zIndex: 1
};

const clockStyle = {
  fontFamily: "sans-serif",
  color: "#fff",
  lineHeight: "110px",
  fontSize: "2em",
  fontWeight: "bold",
  width: "100%",
  textAlign: "center",
  position: "absolute"
};

const frameStyles = {
  position: "absolute",
  left: 0,
  bottom: 0,
  height: "100%"
};

const headingStyle = {
  lineHeight: "110px",
  color: "rgb(54, 213, 19)",
  fontSize: "2em",
  fontWeight: "bold",
  textAlign: "right",
  paddingRight: "1em"
};

const App = () => (
  <div style={styles}>
    <div style={bannerStyle}>
      <JG />
      <div className="clock" style={clockStyle}>
        <Clock format={"HH:mm:ss"} ticking={true} />
      </div>
      <div className="heading" style={headingStyle}>
        Bierpong Vol 18
      </div>
    </div>
    <div>
      <iframe
        style={frameStyles}
        src="https://challonge.com/bp18/module"
        width="100%"
        height="500"
        frameborder="0"
        scrolling="auto"
        allowtransparency="true"
      />
    </div>
  </div>
);

var elem = document.createElement("div");
document.body.appendChild(elem);
render(<App />, elem);
