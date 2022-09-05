import React, { Component } from "react";
import Menu from "./Components/Menu/Menu";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  state = {
    menuState: false,
  };

  toggleMenu = () => {
    this.setState((state) => ({
      menuState: !state.menuState
        ? "active"
        : state.menuState === "deactive"
          ? "active"
          : "deactive",
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <div class="waveWrapper waveAnimation">
          <div class="waveWrapperInner bgTop">
            <div
              class="wave waveTop"
              // style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"
            />
          </div>
          <div class="waveWrapperInner bgMiddle">
            <div
              class="wave waveMiddle"
              // style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"
            />
          </div>
          <div class="waveWrapperInner bgBottom">
            <div
              class="wave waveBottom"
              // style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"
            />
          </div>
        </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }

  // Parallax effect. Pretty heavy for slow devices.
  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();
  }
}

export default App;
