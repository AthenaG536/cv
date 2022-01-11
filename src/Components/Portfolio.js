import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        const projects = this.props.data.projects.map(function (projects) {
            let projectImage = "images/portfolio/" + projects.image;

            return (
                <div key={id++} className="columns portfolio-item websiteitems">
                    <div className="item-wrap">
                        <a href={projects.url}>
                            <img
                                className="portfolio-item"
                                src={projectImage}
                                alt={projects.title}
                            />

                        </a>
                        <div style={{ textAlign: "center" }}>
                            <div className="item-description">
                            <p>{projects.description}</p>
                                </div>

                            <div>
                                <a href={projects.url_project} className="button btn portfolio-btn portfolio-live-btn">
                                    <i className="fa fa-play"></i> View project
                                </a>
                                <a href={projects.url_github} className="button btn portfolio-btn portfolio-github-btn">
                                    <i className="fa fa-github"></i> Github
                                </a>
                            </div>
                            {/* For future use */}
                            {/* Function to check if live project link available, if not show diasbled button */}
                            {/*{(() => {*/}
                            {/*    if (projects.url_project != null) {*/}
                            {/*        return (*/}
                            {/*            <div>*/}
                            {/*                <a href={projects.url_project} className="button btn portfolio-btn portfolio-live-btn">*/}
                            {/*                    <i className="fa fa-play"></i> View project*/}
                            {/*                </a>*/}
                            {/*                <a href={projects.url_github} className="button btn portfolio-btn portfolio-github-btn">*/}
                            {/*                    <i className="fa fa-github"></i> Github*/}
                            {/*                </a>*/}
                            {/*            </div>*/}
                            {/*    )*/}
                            {/*    }else {*/}
                            {/*        return (*/}
                            {/*            <div>*/}
                            {/*                <a href="" className="button btn portfolio-btn portfolio-live-btn-disabled">*/}
                            {/*                    <i className="fa fa-play"></i> View project*/}
                            {/*                </a>*/}
                            {/*                <a href={projects.url_github} className="button btn portfolio-btn portfolio-github-btn">*/}
                            {/*                    <i className="fa fa-github"></i> Github*/}
                            {/*                </a>*/}
                            {/*            </div>*/}
                            {/*        )*/}
                            {/*    }*/}
                            {/*})()}*/}


                        </div>
                    </div>
                </div>
            );
        });

        return (
            <section id="portfolio">
                <Fade left duration={1000} distance="40px">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Work</h1>
                            {/* TODO need to update this div below to slideshow and open link onclick*/}
                            <div
                                id="portfolio-wrapper"
                                className="bgrid-quarters s-bgrid-thirds cf">
                                {projects}
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default Portfolio;
