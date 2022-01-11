import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
      );
    });

    const name = this.props.data.name;
    const city = this.props.data.address.city;
    const country = this.props.data.address.country;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;
    const email = this.props.data.email;
    const mailtoemail = "mailto:" + this.props.data.email;

    return (
        <section id="contact">
          <div className="row section-head">


            <Slide left duration={1000}>
              <div className="two columns header-col">
                <h2 className="primarylight">
                  <span>Get In Touch.</span>
                </h2>
              </div>

              <div className="five columns">
                <p className="lead">{message}</p>
              </div>

            </Slide>



            <Slide right duration={1000}>
              <div className="four columns">
                <div className="widget widget_contact contact-details">
                    <div className="address">
                      {name}
                      <br />
                      <span>{phone}</span>
                      <br />
                      <a href={mailtoemail}><span>{email}</span></a>
                    </div>

                </div>


              </div>
              <div className="one columns">
                <h2>
                  <ul className="social-links">{networks}</ul>
                </h2>
              </div>
            </Slide>

          </div>
          <div className="row hide">
            <Slide left duration={1000}>
              <div className="eight columns">
                <form action="" method="post" id="contactForm" name="contactForm">
                  <fieldset>
                    <div>
                      <label htmlFor="contactName">
                        Name <span className="required">*</span>
                      </label>
                      <input
                          type="text"
                          defaultValue=""
                          size="35"
                          id="contactName"
                          name="contactName"
                          onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactEmail">
                        Email <span className="required">*</span>
                      </label>
                      <input
                          type="text"
                          defaultValue=""
                          size="35"
                          id="contactEmail"
                          name="contactEmail"
                          onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactSubject">Subject</label>
                      <input
                          type="text"
                          defaultValue=""
                          size="35"
                          id="contactSubject"
                          name="contactSubject"
                          onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactMessage">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                          cols="50"
                          rows="15"
                          id="contactMessage"
                          name="contactMessage"
                      ></textarea>
                    </div>

                    <div>
                      <button className="submit">Submit</button>
                      <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                    </div>
                  </fieldset>
                </form>

                <div id="message-warning"> Error boy</div>
                <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!
                  <br />
                </div>
              </div>
            </Slide>

            <Slide right duration={1000}>
              <aside className="four columns footer-widgets">
                <div className="widget widget_contact">
                  <h4>Contact Details</h4>
                  <p className="address">
                    {name}
                    <br />
                    <span>{phone}</span>
                    <br />
                    <a href={mailtoemail}><span>{email}</span></a>
                  </p>
                </div>


              </aside>
            </Slide>
          </div>



        </section>
    );
  }
}

export default Contact;
