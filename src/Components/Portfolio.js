import React, { Component } from "react";
import Zmage from "react-zmage";
import { Fade, Slide } from "react-reveal";

let id = 0;
class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "JavaScript",
            showSlider: false
        }
    }

    toggle = () => this.setState((currentState) => ({showSlider: !currentState.showSlider}));
    
    
    render() {
        if (!this.props.data) return null;
        if (!this.toggle) return null;

        // const slider = <div>
        //          <img src="images/portfolio_v2/cs.gif" />
        //          <p>Fill this space</p>
        //     </div>;
        const slider = <img src="images/portfolio_v2/cs.gif" />;
                
        const projects = this.props.data.projects.map((projects) => {

            let projectImage = "images/portfolio_v2/" + projects.image;
            if(projects.url_project === "https://www.athena-gardner.com/Blackout-Football-Manager"){
                if(!this?.toggle) return null;
                
                return (
                <div>
                    {!this.state.showSlider && <Slide left duration={1300}>
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
                                    <button onClick={this.toggle} className="button btn portfolio-btn portfolio-live-btn portfolio-btn-full">
                                        <i className="fa fa-play"></i> View Highlights
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                    </Slide>
                    }
                    {this.state.showSlider && <Slide left duration={1300}>
                        <div key={id++} className="columns portfolio-item websiteitems">
                            <div className="item-wrap">
                                {slider}
                                <div style={{ textAlign: "center" }}>
                                    <p> I'm currently working on adding my career highlights during my time at Blackout Games. Watch this space!</p>
                                    <button onClick={this.toggle} className="button btn portfolio-btn">
                                        <i className="fa fa-caret-up"></i> Hide Highlights
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    }
                    </div>
                );
            }

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


                        </div>
                    </div>
                </div>
            );
        }, this);

        
        return (
            <section id="portfolio">
                <Fade left duration={1000} distance="40px">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Work</h1>
                            <div
                                id="portfolio-wrapper"
                                className="bgrid-thirds s-bgrid-thirds cf">
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
