import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "Dummy",
        name: "Loading...",
        location: "Bangalore",
        avatar_url: null,
      },
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
        userInfo: json,
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
      <div className="flex flex-col items-center gap-6
        rounded-2xl border border-line bg-white p-6
        shadow-sm transition-shadow hover:shadow-md
        sm:flex-row sm:p-8">

        {/* Profile Photo */}
        {avatar_url ? (
          <img
            src={avatar_url}
            alt={name || login}
            className="h-24 w-24 shrink-0 rounded-full
              object-cover ring-4 ring-primary/10"
          />
        ) : (
          <div className="h-24 w-24 shrink-0 rounded-full
            bg-gray-200 motion-safe:animate-pulse" />
        )}

        {/* Profile Information */}
        <div className="min-w-0 flex-1 text-center sm:text-left">

          <h2 className="mb-2 text-xl font-bold text-ink
            md:text-2xl">
            {name || login}
          </h2>

          <p className="mb-3 text-sm text-muted">
            📍 {location || "Location not available"}
          </p>

          {login !== "Dummy" && (
            <a
              href={`https://github.com/${login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600
                transition-colors hover:text-blue-800
                hover:underline"
            >
              View GitHub Profile ↗
            </a>
          )}

        </div>
      </div>
    );
  }
}

export default UserClass;