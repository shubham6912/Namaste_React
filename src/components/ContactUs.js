import { useState } from "react";
import { Link } from "react-router-dom";

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

  // Shared Tailwind classes
  const inputClass = `w-full rounded-lg border border-line
    bg-white px-4 py-3 text-sm text-ink outline-none
    placeholder:text-muted transition-colors
    focus:border-primary focus:ring-2 focus:ring-primary/20`;

  const labelClass = "mb-2 block text-sm font-semibold text-ink";

  const sectionClass = "mx-auto max-w-6xl px-5 py-10 md:px-8";

  const panelClass =
    "min-w-0 rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8";

  return (
    <main className="min-h-screen bg-page">

      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary
        to-orange-400 px-5 py-16 text-center text-white
        md:py-24">

        <span className="text-xs font-semibold tracking-widest">
          GET IN TOUCH
        </span>

        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          Contact Us
        </h1>

        <p className="mx-auto max-w-2xl text-base md:text-lg">
          Have a question, suggestion, or feedback?
          We'd love to hear from you!
        </p>
      </section>

      {/* Introduction */}
      <section className={`${sectionClass} text-center`}>
        <h2 className="mb-4 text-3xl font-bold text-ink">
          We're Here to Help
        </h2>

        <p className="mx-auto max-w-3xl leading-relaxed text-secondary">
          At FoodCard, we believe great experiences start
          with great communication. Whether you have a
          question about our application, want to share
          feedback, or need assistance, we're happy to help.
        </p>
      </section>

      {/* Support Cards */}
      <section className={sectionClass}>
        <h2 className="mb-8 text-center text-2xl font-bold
          text-ink md:text-3xl">
          How Can We Help You?
        </h2>

        <div className="grid grid-cols-1 gap-5
          sm:grid-cols-2 lg:grid-cols-4">

          {supportOptions.map((option) => (
            <div
              key={option.id}
              className="rounded-xl border border-line
                bg-white p-6 text-center shadow-sm
                transition-all duration-300
                hover:border-primary hover:shadow-lg
                motion-safe:hover:-translate-y-1"
            >
              <span className="text-4xl" aria-hidden="true">
                {option.icon}
              </span>

              <h3 className="mb-2 mt-4 text-lg font-semibold text-ink">
                {option.title}
              </h3>

              <p className="text-sm leading-relaxed text-secondary">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className={sectionClass}>
        <div className="grid grid-cols-1 items-start gap-8
          lg:grid-cols-[1.4fr_1fr]">

          {/* Form Panel */}
          <div className={panelClass}>
            <h2 className="mb-2 text-2xl font-bold text-ink">
              Send Us a Message
            </h2>

            <p className="mb-6 text-sm text-secondary">
              Fill out the form below to share your
              questions or feedback.
            </p>

            {submitted && (
              <div
                className="mb-5 rounded-lg border border-green-200
                  bg-green-50 p-4 text-sm text-green-800"
                role="status"
              >
                ✅ Form submitted in demo mode.
                No message has been sent.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className={labelClass}
                >
                  Full Name
                </label>

                <input
                  className={inputClass}
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className={labelClass}
                >
                  Email Address
                </label>

                <input
                  className={inputClass}
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className={labelClass}
                >
                  Subject
                </label>

                <select
                  className={inputClass}
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

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className={labelClass}
                >
                  Your Message
                </label>

                <textarea
                  className={`${inputClass} resize-y`}
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-primary
                  px-6 py-3 font-semibold text-white
                  transition-colors hover:bg-primary-hover
                  active:scale-[0.98]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-primary"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Information */}
          <div className={panelClass}>
            <h2 className="mb-2 text-2xl font-bold text-ink">
              Let's Connect
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-secondary">
              Your feedback helps us make FoodCard better.
              Choose a topic and tell us what you think.
            </p>

            <div className="divide-y divide-line">

              <div className="flex items-start gap-4 py-5">
                <span className="text-2xl">📧</span>
                <div>
                  <h3 className="font-semibold text-ink">
                    Email Support
                  </h3>
                  <p className="mt-1 text-sm text-secondary">
                    Contact email will be available
                    once support is configured.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-semibold text-ink">
                    Our Platform
                  </h3>
                  <p className="mt-1 text-sm text-secondary">
                    FoodCard — Online Restaurant Discovery
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <span className="text-2xl">⏰</span>
                <div>
                  <h3 className="font-semibold text-ink">
                    Support Availability
                  </h3>
                  <p className="mt-1 text-sm text-secondary">
                    Support hours will be announced
                    when the service launches.
                  </p>
                </div>
              </div>

            </div>

            {/* Highlight */}
            <div className="mt-6 rounded-xl bg-primary/10 p-5">
              <h3 className="mb-2 font-bold text-ink">
                💡 Have an Idea?
              </h3>

              <p className="text-sm leading-relaxed text-secondary">
                We welcome suggestions for new features,
                restaurant filters, and improvements
                that make FoodCard more useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className={sectionClass}>
        <h2 className="mb-8 text-center text-2xl
          font-bold text-ink md:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl border border-line
                bg-white p-5 shadow-sm open:border-primary/40"
            >
              <summary className="flex cursor-pointer
                list-none items-center justify-between
                gap-4 font-semibold text-ink
                [&::-webkit-details-marker]:hidden">

                {faq.question}

                <span
                  className="shrink-0 text-xl text-primary
                    transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <p className="mt-4 text-sm leading-relaxed text-secondary">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <section className="mt-8 bg-ink px-5 py-16
        text-center text-white">

        <h2 className="text-2xl font-bold md:text-3xl">
          Good Food. Great Experiences.
        </h2>

        <p className="mx-auto mb-8 mt-4 max-w-xl text-gray-300">
          Discover amazing restaurants and explore delicious
          cuisines with FoodCard.
        </p>

        <Link
          to="/"
          className="inline-block rounded-lg bg-primary
            px-8 py-3 font-semibold text-white
            transition-colors hover:bg-primary-hover"
        >
          Explore Restaurants
        </Link>
      </section>

    </main>
  );
};

export default ContactUs;