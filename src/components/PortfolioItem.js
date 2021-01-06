import React, { Component } from "react";

export default class PortfolioItem extends Component {
    render() {
        const { title, link, backgroundImage } = this.props;
        return (
            <div
                className="item-container"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <div className="item-name">{title}</div>
                <a href={link}>
                    <div className="button">
                        <span className="name">Visit Website</span>
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
                </a>
                <div className="item-name-container">
                    <div className="item-name-2">{title}</div>
                </div>
            </div>
        );
    }
}
