import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Prateek Srivastava.</h4>
            <p>
              I am a web developer and tinkerer based in the beautiful small
              town of Rajasthan.
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty
              and easy to use. I can't stop learning new things; the more, the
              better. I also love Investing/Trading, a passion that have taught
              me a lot about myself. Oh, and NonFiction Books; I have a passion
              for those!
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either
              standalone or including popular frameworks like ReactJS and
              AngularJs. I also make the web pretty by using Sass, CSS and,
              whenever needed, any of their friends: Bootstrap, Tailwind, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express,
              MongoDB, etc). But, of course, whenever the project requires PHP,
              I do PHP as well (Yii, Laravel, etc).
            </p>
          </div>
          {/* <div className="desc">
            <h4 className="subtitle">Also a Trader.</h4>
            <p>
              I feel comfortable working with many Adobe products. Photoshop,
              Illustrator, InDesign, Lightroom or Xd are some kind of industry
              standards and I love working with them. I'm not limited to them,
              though: Gimp, Inkscape or Figma are also very valid applications
              that I've been working with.
            </p>
            <p>
              User interfaces, brochures, books, branding... You name it! As I
              mentioned, creating pretty things is particularly important for
              me.
            </p>
          </div> */}
        </article>
      </div>
    </section>
  );
};

export default About;
