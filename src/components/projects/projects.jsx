import "./projects.scss";

const Projects = () => {
  return (
    <div className="project">
      <div className="wrapper">
        <a href="https://arjunkr403.github.io/weather-app/" target="_blank">
          <div className="p1">
          <img src="src\images\weather.png" alt="" />
          <span>Weather App</span>
        </div>
          </a>
        <a href="https://arjunkr403.github.io/p3-sidebar/" target="_blank">
          <div className="p2">
          <img src="src\images\dashboard.png" alt="" />
          <span>Dashboard With Sidebar</span>
        </div>
          </a>
        <a href="https://arjunkr403.github.io/yt-dashboard/" target="_blank">
          <div className="p3">
          <img src="src\images\yt.png" alt="" />
          <span>Youtube Dashboard</span>
        </div>
          </a>
        <a href="https://arjunkr403.github.io/drumset-JS/" target="_blank">
          <div className="p4">
          <img src="src\images\drumkit.png" alt="" />
          <span>DrumKit</span>
        </div>
          </a>
      </div>
    </div>
  );
};

export default Projects;
