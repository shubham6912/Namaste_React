
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo only: Connect a backend API to send messages.
    console.log("Contact Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const supportOptions = [
    {
      id: 1,
      icon: "💬",
      title: "General Enquiries",
      description:
        "Have questions about FoodCard? We'd love to hear from you.",
    },
    {
      id: 2,
      icon: "🍽️",
      title: "Restaurant Information",
      description:
        "Need help finding a restaurant or understanding its details?",
    },
    {
      id: 3,
      icon: "🛠️",
      title: "Technical Support",
      description:
        "Facing issues with search, filtering, or the application?",
    },
    {
      id: 4,
      icon: "🤝",
      title: "Partnerships",
      description:
        "Interested in collaborating or exploring opportunities?",
    },
  ];

  const faqs = [
    {
      question: "What is FoodCard?",
      answer:
        "FoodCard is a restaurant discovery application that helps users explore restaurants and cuisines.",
    },
    {
      question: "How do I search for restaurants?",
      answer:
        "Use the search bar on the homepage to find restaurants by name.",
    },
    {
      question: "Can I filter top-rated restaurants?",
      answer:
        "Yes! Use the Top Rated Restaurants filter to explore highly rated options.",
    },
    {
      question: "How can I report a technical issue?",
      answer:
        "Select Technical Support in the contact form and describe the issue. Form submission is currently a demo feature.",
    },
  ];

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <span className="contact-tagline">GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>
          Have a question, suggestion, or feedback?
          We'd love to hear from you!
        </p>
      </section>

      {/* Intro */}
      <section className="contact-intro">
        <h2>We're Here to Help</h2>
        <p>
          At FoodCard, we believe great experiences start
          with great communication. Whether you have a
          question about our application, want to share
          feedback, or need assistance, we're happy to help.
        </p>
      </section>

      {/* Support Cards */}
      <section className="contact-section">
        <h2>How Can We Help You?</h2>
        <div className="contact-support-grid">
          {supportOptions.map((option) => (
            <div className="contact-support-card" key={option.id}>
              <span className="support-icon">{option.icon}</span>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <div className="contact-content">
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <p>
              Fill out the form below to share your
              questions or feedback.
            </p>

            {submitted && (
              <div className="contact-success" role="status">
                ✅ Form submitted in demo mode.
                No message has been sent.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-subject">Subject</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Enquiry">
                    General Enquiry
                  </option>
                  <option value="Restaurant Information">
                    Restaurant Information
                  </option>
                  <option value="Technical Support">
                    Technical Support
                  </option>
                  <option value="Partnership">
                    Partnership
                  </option>
                  <option value="Feedback">
                    Feedback
                  </option>
                </select>
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Information */}
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>
              Your feedback helps us make FoodCard better.
              Choose a topic and tell us what you think.
            </p>

            <div className="contact-info-item">
              <span>📧</span>
              <div>
                <h3>Email Support</h3>
                <p>
                  Contact email will be available
                  once support is configured.
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <span>📍</span>
              <div>
                <h3>Our Platform</h3>
                <p>
                  FoodCard — Online Restaurant Discovery
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <span>⏰</span>
              <div>
                <h3>Support Availability</h3>
                <p>
                  Support hours will be announced
                  when the service launches.
                </p>
              </div>
            </div>

            <div className="contact-highlight">
              <h3>💡 Have an Idea?</h3>
              <p>
                We welcome suggestions for new features,
                restaurant filters, and improvements
                that make FoodCard more useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-section">
        <h2>Frequently Asked Questions</h2>
        <div className="contact-faq">
          {faqs.map((faq, index) => (
            <details className="contact-faq-item" key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="contact-footer">
        <h2>Good Food. Great Experiences.</h2>
        <p>
          Discover amazing restaurants and explore delicious
          cuisines with FoodCard.
        </p>
        <a href="/" className="contact-home-btn">
          Explore Restaurants
        </a>
      </section>
    </main>
  );
};

export default ContactUs;
