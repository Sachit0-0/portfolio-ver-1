import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to get in touch with us using the contact form below:</p>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <p>You can also reach us at contact@example.com or by phone at +1 234 567 8901.</p>
    </div>
  );
}

export default Contact;
