import React from "react";
import UserClass from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor of About called");
  }

  componentDidMount() {
    console.log("About us page component Did Mount");
  }

  render() {
    console.log("Render About");

    return (
      <main className="flex min-h-[80vh] items-center
        justify-center px-5 py-10">

        <div className="w-full max-w-2xl">

          {/* About Label */}
          <span className="text-xs font-semibold
            tracking-widest text-primary">
            ABOUT ME
          </span>

          {/* Heading */}
          <h1 className="my-5 text-3xl font-bold
            text-ink md:text-5xl">
            Hi, I'm Shubham.
          </h1>

          {/* Description */}
          <p className="mb-8 text-base leading-relaxed
            text-secondary md:text-lg">
            Software Engineer passionate about building
            scalable applications, solving problems,
            and exploring new technologies.
          </p>

          {/* GitHub Profile */}
          <UserClass
            name="shubham691"
            profilePhoto="https://avatars.githubusercontent.com/u/56666844?v=4"
            location="Bangalore"
          />

        </div>
      </main>
    );
  }
}

export default About;