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
                    <div class="hero-container">
                        <div class="hero-header">
                            Designer, Front-end Developer
                        </div>
                        <div class="hero-text">
                            I design and code beautifully simple things, and I
                            love what I do.
                        </div>
                        <div class="hero-image"></div>
                        <div class="separator"></div>
                        <SocialMediaButtons />
                    </div>
                </section>
            </>
        );
    }
}
