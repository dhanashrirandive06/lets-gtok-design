import react from "react";
function About() {
  return (
    <div
      id="about"
      className="jumbotron jumbotron-fluid aboutJumbotron d-flex flex-column"
      style={{
        backgroundImage:
          "linear-gradient(to left top, #2c1ec4, #3120cc, #3623d3, #3a25db, #3f28e3, #5e2ae6, #762ce9, #8b2fec, #ae36ea, #cb42e9, #e44fe8, #fb5fe7)",
      }}
    >
      <div className="container aboutContainer mx-auto">
        <div className="cardAboutBox p-3 mx-auto d-flex flex-column ">
          <div className="heartClass">💙</div>
          <div className="firstText p-2 mx-1">
            <span className="firstTextSpan">Share feelings</span> without being
            judged
          </div>
          <div className="mx-auto">
            <button className="btn btnShare my-3">Share feelings</button>
          </div>
        </div>
      </div>
      <div className="joinClass mx-auto">Join <span className="dotClass">.</span> Share <span className="dotClass">.</span> Feel Relief</div>
    </div>
  );
}

export default About;
