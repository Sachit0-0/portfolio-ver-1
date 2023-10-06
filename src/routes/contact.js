import React from 'react';
import { Container, Image } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="text-center" >
      {/* Profile Image */}
      <Image
        src="assests/360033919_329090166112916_8476159787953751632_n.jpg"
        roundedCircle
        alt="Profile"
        className="mx-auto my-4"
      />

      <div className="contact-info mt-5">
        <h2>Contact Information</h2>
        <p>You can also reach us at:</p>
        <ul>
          <li>Email: sachitdahal33@gmail.com</li>
          <li>Phone: +977 9803033781</li>
          <li>Address: Baluwatar, Kathmandu</li>
        </ul>
      </div>

      <hr style={{ marginTop: '40px' }} />

      <div className="contact-form mt-5">
  <h2 style={{ color: 'white' }}>Contact Us</h2>
  <p style={{ color: 'white' }}>
    If you have any questions or inquiries, feel free to get in touch with us using the contact form below:
  </p>

  <form>
    <div className="mb-3">
      <label htmlFor="name" className="form-label" style={{ color: 'white' }}>
        Name
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        name="name"
        required
        style={{ color: 'white' }}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label" style={{ color: 'white' }}>
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        required
        style={{ color: 'white' }}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="message" className="form-label" style={{ color: 'white' }}>
        Message
      </label>
      <textarea
        className="form-control"
        id="message"
        name="message"
        rows="4"
        required
        style={{ color: 'white' }}
      ></textarea>
    </div>

    <button type="submit" className="btn btn-dark">
      Submit
    </button>
  </form>
</div>

    </Container>
  );
}

export default Contact;
