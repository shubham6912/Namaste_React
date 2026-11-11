const About = () => {
  const features = [
    {
      id: 1,
      icon: "🍔",
      title: "Explore Restaurants",
      description:
        "Discover restaurants, popular dishes, and different cuisines in one place.",
    },
    {
      id: 2,
      icon: "⭐",
      title: "Ratings & Reviews",
      description:
        "Explore restaurant ratings to make better dining decisions.",
    },
    {
      id: 3,
      icon: "🔍",
      title: "Smart Search",
      description:
        "Quickly find restaurants based on names, cuisines, and preferences.",
    },
    {
      id: 4,
      icon: "📱",
      title: "Responsive Experience",
      description:
        "Enjoy a seamless browsing experience across desktop and mobile devices.",
    },
    {
      id: 5,
      icon: "🥗",
      title: "Multiple Cuisines",
      description:
        "Explore Indian, Chinese, Italian, South Indian, and many more cuisines.",
    },
    {
      id: 6,
      icon: "⚡",
      title: "Fast Browsing",
      description:
        "Find your next meal quickly through a simple and user-friendly interface.",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Discover",
      description: "Browse restaurants and explore different cuisines.",
    },
    {
      id: 2,
      title: "Compare",
      description: "Check ratings, restaurant details, and available options.",
    },
    {
      id: 3,
      title: "Choose",
      description: "Find the restaurant that best matches your cravings.",
    },
  ];

  const faqs = [
    {
      question: "What is FoodCard?",
      answer:
        "FoodCard is a React-based restaurant discovery application that helps users explore restaurants and cuisines.",
    },
    {
      question: "Can I search for restaurants?",
      answer:
        "Yes! You can search for restaurants using the search functionality available on the homepage.",
    },
    {
      question: "Can I filter restaurants by rating?",
      answer:
        "Yes. FoodCard provides rating-based filtering to help you discover highly rated restaurants.",
    },
    {
      question: "Is FoodCard mobile-friendly?",
      answer:
        "The interface is designed to adapt to different screen sizes.",
    },
  ];

  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="about-tagline">WELCOME TO FOODCARD</span>
        <h1>Discover Great Food, Anytime!</h1>
        <p>
          FoodCard makes restaurant discovery simple, exciting, and
          convenient. Explore your favorite cuisines, discover new
          restaurants, and find delicious food near you.
        </p>
      </section>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          FoodCard is a modern restaurant discovery platform built
          with React. Our goal is to create a simple, fast, and
          enjoyable experience for food lovers.
        </p>
        <p>
          Whether you're craving biryani, pizza, burgers, or
          traditional South Indian meals, FoodCard helps you
          explore restaurants and find something delicious.
        </p>
      </section>

      <section className="about-section about-mission">
        <h2>🎯 Our Mission</h2>
        <p>
          Our mission is to make discovering great food easier
          through technology. We believe choosing where to eat
          should be a delightful experience.
        </p>
      </section>

      <section className="about-section">
        <h2>What Makes FoodCard Special?</h2>
        <p>
          Explore the features that make restaurant discovery easy.
        </p>

        <div className="about-features">
          {features.map((feature) => (
            <div className="about-feature-card" key={feature.id}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>How It Works</h2>

        <div className="about-steps">
          {steps.map((step) => (
            <div className="about-step" key={step.id}>
              <div className="step-number">{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>Our Core Values</h2>

        <ul className="about-values">
          <li>❤️ Customer-first experience</li>
          <li>🚀 Continuous innovation</li>
          <li>🤝 Trust and transparency</li>
          <li>🌍 Diversity of cuisines</li>
          <li>✨ Simple and accessible technology</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Frequently Asked Questions</h2>

        <div className="about-faq">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="about-footer">
        <h2>Hungry? Let's Find Something Delicious!</h2>
        <p>
          Discover your next favorite restaurant with FoodCard.
        </p>
        <a href="/" className="about-home-btn">
          Explore Restaurants
        </a>
      </section>
    </main>
  );
};

export default About;
