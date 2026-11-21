import React from "react";


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "Dummy",
        name: "Loading...",
        location: "Bangalore",
        avatar_url: null
      }
    };

    console.log("User Constructor");
  }

  async componentDidMount() {
    try {
      const data = await fetch(
        "https://api.github.com/users/shubham6912"
      );

      if (!data.ok) {
        throw new Error("Failed to fetch GitHub user");
      }

      const json = await data.json();

      this.setState({
        userInfo: json
      });

      console.log(json);
    } catch (error) {
      console.error("Error fetching GitHub user:", error);
    }
  }

  render() {
    const { login, name, location, avatar_url } =
      this.state.userInfo;

    return (
      <div className="about-profile-card">
        <img
          src={avatar_url}
          alt={name || login}
          className="about-profile-avatar"
        />

        <div className="about-profile-info">
          <h2>{name || login}</h2>
          <p>📍 {location || "Location not available"}</p>

          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile ↗
          </a>
        </div>
      </div>
    );
  }
}

export default UserClass;