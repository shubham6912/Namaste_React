
import React from "react";
import UserClass from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor of About called");
  }

  componentDidMount(){
    console.log("About us page component Did Mount")
  }



  render() {
    console.log("Render About");

    return (
      <div className="about-container">
        <div className="about-content">
          <span className="about-label">ABOUT ME</span>
          <h1>Hi, I'm Shubham.</h1>
          <p className="about-description">
            Software Engineer passionate about building
            scalable applications, solving problems,
            and exploring new technologies.
          </p>

          <UserClass
            name="shubham691"
            profilePhoto="https://avatars.githubusercontent.com/u/56666844?v=4"
            location="Bangalore"
          />

        </div>
      </div>
    );
  }
}

export default About;
