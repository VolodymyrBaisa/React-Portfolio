import React, { Component } from "react";
import Footer from "../components/Footer.js";
import ContactForm from "../components/ContactForm.js";

export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="background-cover"></div>
                <div className="contact-container">
                    <div className="title">
                        Thanks for taking the time to reach out.
                        <br />
                        How can I help you today?
                    </div>
                    <ContactForm />
                </div>
                <Footer />
            </section>
        );
    }
}
