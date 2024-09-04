import React from "react";

function ContactUs() {
  return (
    <div>
      <div class="container-fluid d-flex justify-content-center">
        <div className="container-fluid d-flex justify-content-center flex-column align-items-center w-100">
          <div className="container-fluid text-center justify-content-center py-3 bg-light w-100">
            <h4 className="text-center">Contact Us</h4>
            <p>
              We'd love to hear from you! Fill out the form below and we will
              get in touch with you shortly.
            </p>
          </div>
          <form style={{ paddingTop: 20 }} className="w-25">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="John Doe" required
                style={{ paddingRight: 100 }}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="example@example.com" required
                style={{ paddingRight: 100 }}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Your Message</label>
              <textarea
                type="text"
                class="form-control"
                placeholder="Your message here..." required
                style={{ paddingRight: 100 }}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
