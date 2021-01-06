import React, { Component } from "react";
import SkillsDescription from "../components/SkillsDescription.js";
import SkillsGraph from "../components/SkillsGraph.js";

export default class about extends Component {
    render() {
        return (
            <section id="about">
                <div className="header-container">
                    {/* prettier-ignore */}
                    <svg className="header-svg" preserveAspectRatio="none" viewBox="0 0 1440 481" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 414.603V0H194.27H640.389H1119.55H1440V414.603C1324.14 414.603 1233.21 481 1134 481C963.367 481 806.64 370.52 650.5 370.52C510.145 370.52 405.733 459.29 238 459.29C176.28 459.29 68.0859 414.603 0 414.603Z" fill="#3D4958" fillOpacity="0.25"/>
                <path d="M0 399.949V0H194.27H640.389H1119.55H1440V399.949C1324.14 399.949 1233.21 464 1134 464C963.367 464 806.64 357.424 650.5 357.424C510.145 357.424 405.733 443.057 238 443.057C176.28 443.057 68.0859 399.949 0 399.949Z" fill="#3D4958" fillOpacity="0.5"/>
                <path d="M0 384.434V0H194.27H640.389H1119.55H1440V384.434C1324.14 384.434 1233.21 446 1134 446C963.367 446 806.64 343.559 650.5 343.559C510.145 343.559 405.733 425.87 238 425.87C176.28 425.87 68.0859 384.434 0 384.434Z" fill="#3D4958"/>
                </svg>
                    <div className="container">
                        <div className="about-title">
                            Hi, I’m Volodymyr. Nice to meet you.
                        </div>
                        <div className="about-comment">
                            I’ve always sought out opportunities and challenges
                            that are meaningful to me.
                            <br />
                            As a web developer, I enjoy using my obsessive
                            attention to detail, my unequivocal love for making
                            things, and my mission-driven work ethic to
                            literally change the world.
                            <br />
                            That's why I’m excited to make a big impact at a
                            high growth company.
                        </div>
                    </div>
                </div>
                <div className="skills-container">
                    <SkillsDescription />
                    <SkillsGraph />
                </div>
            </section>
        );
    }
}
