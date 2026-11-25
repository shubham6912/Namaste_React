const Grocery = () => {
  const categories = [
    { name: "Fresh Vegetables", icon: "🥦" },
    { name: "Fresh Fruits", icon: "🍎" },
    { name: "Dairy Products", icon: "🥛" },
    { name: "Bakery", icon: "🍞" },
    { name: "Beverages", icon: "🧃" },
    { name: "Daily Essentials", icon: "🛒" },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 md:px-8">

      {/* Hero Section */}
      <section className="rounded-2xl bg-linear-to-r
        from-green-50 to-green-100 px-6 py-12
        text-center md:py-20">

        <span className="rounded-full bg-green-200
          px-4 py-2 text-xs font-semibold text-green-800">
          FRESH & HEALTHY
        </span>

        <h1 className="mt-6 text-3xl font-bold
          text-green-900 md:text-5xl">
          Fresh Groceries at Your Doorstep
        </h1>

        <p className="mx-auto mt-4 max-w-xl
          text-secondary md:text-lg">
          Discover fresh fruits, vegetables, dairy products
          and everyday essentials, all in one place.
        </p>

        <a
          href="#categories"
          className="mt-6 inline-block rounded-lg bg-primary
            px-8 py-3 font-semibold text-white transition-colors
            hover:bg-primary-hover"
        >
          Explore Categories
        </a>

      </section>

      {/* Categories Section */}
      <section id="categories" className="mt-12">

        <h2 className="mb-6 text-2xl font-bold text-ink">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 gap-4
          md:grid-cols-3 lg:grid-cols-6">

          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-xl border border-line
                bg-white p-6 text-center shadow-sm
                transition-all duration-300
                hover:border-primary hover:shadow-lg
                motion-safe:hover:-translate-y-1"
            >
              <div className="mb-4 text-5xl">
                {category.icon}
              </div>

              <h3 className="text-sm font-semibold
                text-ink md:text-base">
                {category.name}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="mt-12 rounded-xl border
        border-dashed border-line bg-white p-8 text-center">

        <div className="text-4xl">🚚</div>

        <h2 className="mt-4 text-xl font-bold text-ink">
          Grocery Delivery Coming Soon!
        </h2>

        <p className="mt-2 text-sm text-muted">
          We are working to bring fresh groceries
          directly to your doorstep.
        </p>

      </section>
    </main>
  );
};

export default Grocery;