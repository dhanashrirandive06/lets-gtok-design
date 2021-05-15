import react from "react";
import bg from "../../assets/img/bgcontact.jpg";
function Contact() {
  return (
    <div
      class="jumbotron jumbotron-fluid mb-0 justify-content-center"
      style={{backgroundColor:"rgb(109 ,43, 232 , 0.11)"}}
      id="contact"
    >
      <div class="container mx-auto">
        <div class="card mx-auto shadow contactCard" >
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="name"
                />
              </div>
              <div class="form-group">
                <label for="email">Email </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="email"
                />
              </div>
              
              <div class="form-group">
                <label for="message">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btnShare my-3">Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
