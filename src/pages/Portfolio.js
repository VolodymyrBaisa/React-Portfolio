import React, { Component } from "react";

export default class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div class="portfolio-header-container">
                    {/* prettier-ignore */}
                    <svg class="header-svg" preserveAspectRatio="none" viewBox="0 0 1440 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <path d="M1440 0H1V204.222C1 204.222 83.5 232.227 268.5 240.628C452.538 248.985 713.767 216.945 815.911 204.416L817.5 204.222C918.5 191.834 1109.5 168.62 1440 133.158V0Z" fill="#F4F4F4"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="-3" y="0" width="1447" height="256" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="10"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        </defs>
                        </svg>

                    <div class="container">
                        <div class="portfolio-title">My Recent Work</div>
                        <div class="portfolio-comment">
                            Here are a few design projects I've worked on
                            recently.
                        </div>
                    </div>
                </div>
                <div class="portfolio-container">
                    {/* Weather App */}
                    <div class="item-container-1">
                        <div class="item-name">Weather App</div>
                        <a href="https://volodymyrbaisa.github.io/HW-WeatherApp/">
                            <div class="button">
                                <span class="name">Visit Website</span>
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
                        </a>
                        <div class="item-name-container">
                            <div class="item-name-2">Weather App</div>
                        </div>
                    </div>
                    {/* Work Scheduler */}
                    <div class="item-container-2">
                        <div class="item-name">Work Scheduler</div>
                        <a href="https://volodymyrbaisa.github.io/HW-Work-Scheduler/">
                            <div class="button">
                                <span class="name">Visit Website</span>
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
                        </a>
                        <div class="item-name-container">
                            <div class="item-name-2">Work Scheduler</div>
                        </div>
                    </div>
                    {/* Quiz App */}
                    <div class="item-container-3">
                        <div class="item-name">Quiz App</div>
                        <a href="https://volodymyrbaisa.github.io/HW-Quiz-App/">
                            <div class="button">
                                <span class="name">Visit Website</span>
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
                        </a>
                        <div class="item-name-container">
                            <div class="item-name-2">Quiz App</div>
                        </div>
                    </div>
                    {/* Password Generator */}
                    <div class="item-container-4">
                        <div class="item-name">Password Generator</div>
                        <a href="https://volodymyrbaisa.github.io/HW-PasswordGenerator/">
                            <div class="button">
                                <span class="name">Visit Website</span>
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
                        </a>
                        <div class="item-name-container">
                            <div class="item-name-2">Password Generator</div>
                        </div>
                    </div>
                    {/* Comic Base */}
                    <div class="item-container-5">
                        <div class="item-name">Comic Base</div>
                        <a href="https://volodymyrbaisa.github.io/Project1-Comics-Reader/">
                            <div class="button">
                                <span class="name">Visit Website</span>
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
                        </a>
                        <div class="item-name-container">
                            <div class="item-name-2">Comic Base</div>
                        </div>
                    </div>
                    {/* How To? */}
                    <div class="item-container-6">
                        <div class="item-name">How To?</div>
                        <a href="https://app-project2.herokuapp.com/posts/">
                            <div class="button">
                                <span class="name">Visit Website</span>
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
                        </a>
                        <div class="item-name-container">
                            <div class="item-name-2">How To?</div>
                        </div>
                    </div>
                    {/* Note Taker */}
                    <div class="item-container-7">
                        <div class="item-name">Note Taker</div>
                        <a href="https://note-traker.herokuapp.com/">
                            <div class="button">
                                <span class="name">Visit Website</span>
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
                        </a>
                        <div class="item-name-container">
                            <div class="item-name-2">Note Taker</div>
                        </div>
                    </div>
                    {/* Eat De Burger */}
                    <div class="item-container-8">
                        <div class="item-name">Eat De Burger</div>
                        <a href="https://hw-eat-da-burger-13.herokuapp.com/">
                            <div class="button">
                                <span class="name">Visit Website</span>
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
                        </a>
                        <div class="item-name-container">
                            <div class="item-name-2">Eat De Burger</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
