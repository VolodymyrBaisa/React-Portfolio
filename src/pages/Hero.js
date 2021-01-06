import React, { Component } from "react";
import Header from "../components/Header.js";
import SocialMediaButtons from "../components/SocialMediaButtons.js";

export default class Hero extends Component {
    render() {
        return (
            <>
                {/* Hero */}
                <section id="hero">
                    <Header />
                    {/* Hero Container */}
                    <div className="hero-container">
                        <div className="hero-header">
                            Designer, Front-end Developer
                        </div>
                        <div className="hero-text">
                            I design and code beautifully simple things, and I
                            love what I do.
                        </div>
                        <div className="hero-image"></div>
                        <div className="separator"></div>
                        <SocialMediaButtons />
                    </div>
                </section>
            </>
        );
    }
}
