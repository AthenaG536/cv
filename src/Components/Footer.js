import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              {/* Repositioned networks to contact.js until contact form is setup */}
              {/*<ul className="social-links">{networks}</ul>*/}

              <ul className="copyright">
                <li>&copy; Copyright 2021 Athena Gardner</li>
                <li>
                  Original Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
