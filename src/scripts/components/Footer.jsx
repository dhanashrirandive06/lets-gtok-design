import react, { Fragment } from "react";
import FooterImg from "../../assets/img/footerImg.png";
function Footer() {
  return (
    <div
    id="careers"
      class="jumbotron jumbotron-fluid mb-0 d-flex justify-content-center align-content-center"
      style={{
        backgroundImage:
          "linear-gradient(to left top, #2c1ec4, #3120cc, #3623d3, #3a25db, #3f28e3, #5e2ae6, #762ce9, #8b2fec, #ae36ea, #cb42e9, #e44fe8, #fb5fe7)",
      }}
    >
      <div className="d-flex footer py-5 justify-content-center">  
          <div class="container footerContainer my-5 shadow pt-4 pb-5 px-4">
            <h5>Why Lets Gtok?</h5>
            <div className="footerText pr-5">
              Lets Gtok aims to provide a sage space online for people to share
              and connect with genuine feelings. Uses can share their feelings
              or activities even without revealing their identity.
            </div>
            <button className="btn btnShare my-3">Learn More</button>
        </div>
          <img src={FooterImg} className="footerImage" alt="" />
        
      </div>
    </div>
  );
}

export default Footer;
