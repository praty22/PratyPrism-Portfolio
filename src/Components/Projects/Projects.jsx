import React from "react";
import Project from "./Project";
import "./Projects.css";
import Ausbiz from "./Images/Ausbiz.png";
import AbpLiveImg from "./Images/AbpLive.jpg";
import AwrConnectImg from "./Images/AwrConnect.jpg";
import PixientFilmsImg from "./Images/PixientFilms.jpg";
import MonomythStoriesImg from "./Images/MonomythStories.jpg";
import SynlineFilmsImg from "./Images/SynlineFilms.jpg";

const Projects = (props) => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
        </div>
        <div className="projects-wrapper">
          <Project
            title="Ausbiz"
            img={Ausbiz}
            tech="js sass react node"
            link="https://www.ausbiz.com.au/"
            repo=""
          >
            <small>
              Built using Node, Express, MongoDB, SCSS, React.js and React
              Router.
            </small>
            <p>
              This is a full-stack website that I made which lets the users
              consume the content created by Ausbiz TV either live or VOD.
            </p>
          </Project>
          <Project
            title="AWR Connect App Portal."
            img={AwrConnectImg}
            tech="js node css scss react"
            link="https://connect-admin-panel-wehxzjtmaq-ew.a.run.app/Dashboard"
            repo=""
          >
            <small>
              Built using Node, Express, MongoDB, JS + jQuery + Axios, CSS +
              Bootstrap and Pug.
            </small>
            <p>
              Another full-stack website to manage multiple web apps and app data and auth.
            </p>
          </Project>
          <Project
            title="ABP Live."
            img={AbpLiveImg}
            tech="react js node css aws"
            link="https://www.abplive.com/"
            repo=""
          >
            <small>
              Built using Reactjs, Node, Express, MongoDB, JS + jQuery, CSS +
              Bootstrap and Pug.
            </small>
            <p>
              ABP News is an Indian Hindi-language free-to-air television news
              channel owned by ABP Group. Read Latest News Headlines, Top 10 News Today, Breaking News from India.
            </p>
          </Project>
          <Project
            title="Pixient Films"
            img={PixientFilmsImg}
            tech="js css wordpress"
            link="https://pixientfilms.com"
            repo=""
          >
            <small>
              Built using Wordpress, JS + jQuery, CSS + Bootstrap.
            </small>
            <p>
              Swift and clean UX Website to display portfolio of Photo-Movie Editor
            </p>
          </Project>
          <Project
            title="Monomyth Stories."
            img={MonomythStoriesImg}
            tech="js wordpress css"
            link="https://www.monomythstories.com/"
            repo=""
          >
            <small>
              Built using Wordpress, CSS + Bootstrap and Pug.
            </small>
            <p>
              Another fully wordpress controlled website to showcase the work of movie producer & editor.
            </p>
          </Project>
          <Project
            title="Syncline films"
            img={SynlineFilmsImg}
            tech="js node css"
            link="https://synclinefilms.com/"
            repo=""
          >
            <small>Built using Node, Express, CSS + Bootstrap.</small>
            <p>
              Company website to display the services provided, recognitions & happy clients.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
