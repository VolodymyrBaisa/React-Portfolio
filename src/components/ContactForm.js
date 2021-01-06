import React, { Component } from "react";

export default class ContactForm extends Component {
    render() {
        return (
            <div class="message">
                <div class="row">
                    <input id="name" placeholder="Name" type="text" required />

                    <input
                        id="email"
                        placeholder="Email"
                        type="email"
                        required
                    />
                </div>

                <textarea
                    id="message"
                    placeholder="Message"
                    required
                ></textarea>

                <div id="submit" class="button">
                    <span class="name">Submit</span>
                    <span class="arrow">
                        <svg
                            class="button-arrow"
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
