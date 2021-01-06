import React, { Component, createRef } from "react";

export default class ContactForm extends Component {
    constructor() {
        super();
        this.nameRef = createRef();
        this.emailRef = createRef();
        this.messageRef = createRef();
    }

    onSubmitClick = () => {
        if (this.nameRef && this.emailRef && this.messageRef) {
            window.open(
                `mailto:biosvova@gmail.com?body=name:${this.nameRef.current.value}%0D%0Aemail:${this.emailRef.current.value}%0D%0A${this.messageRef.current.value}`
            );
        }
    };

    render() {
        return (
            <div className="message">
                <div className="row">
                    <input
                        ref={this.nameRef}
                        id="name"
                        placeholder="Name"
                        type="text"
                        required
                    />

                    <input
                        ref={this.emailRef}
                        id="email"
                        placeholder="Email"
                        type="email"
                        required
                    />
                </div>

                <textarea
                    ref={this.messageRef}
                    id="message"
                    placeholder="Message"
                    required
                ></textarea>

                <div
                    onClick={this.onSubmitClick}
                    id="submit"
                    className="button"
                >
                    <span className="name">Submit</span>
                    <span className="arrow">
                        <svg
                            className="button-arrow"
                            preserveAspectRatio="none"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                                fill="#F4F4F4"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        );
    }
}
