import '../scss/Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact container py-5">
      <h2 className="text-center mb-5">Let's Get in Touch!</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form action="https://formspree.io/f/moqgopeq" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
