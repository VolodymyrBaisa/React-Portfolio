import React, { Component } from "react";
import PortfolioItem from "../components/PortfolioItem.js";
import WeatherAppImg from "../img/weather-app.png";
import WorkSchedulerImg from "../img/work-scheduler.png";
import QuizAppImg from "../img/quiz-app.png";
import PasswordGeneratorImg from "../img/password-generator.png";
import ComicBaseImg from "../img/comic-base.png";
import Project2Img from "../img/../img/project2.png";
import NoteTakerImg from "../img/note_taker.png";
import EatDeBurgerImg from "../img/eat_de_burger.png";

export default class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="portfolio-header-container">
                    {/* prettier-ignore */}
                    <svg className="header-svg" preserveAspectRatio="none" viewBox="0 0 1440 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <path d="M1440 0H1V204.222C1 204.222 83.5 232.227 268.5 240.628C452.538 248.985 713.767 216.945 815.911 204.416L817.5 204.222C918.5 191.834 1109.5 168.62 1440 133.158V0Z" fill="#F4F4F4"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="-3" y="0" width="1447" height="256" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="10"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        </defs>
                        </svg>

                    <div className="container">
                        <div className="portfolio-title">My Recent Work</div>
                        <div className="portfolio-comment">
                            Here are a few design projects I've worked on
                            recently.
                        </div>
                    </div>
                </div>
                <div className="portfolio-container">
                    {/* Weather App */}
                    <PortfolioItem
                        title={"Weather App"}
                        link={"https://volodymyrbaisa.github.io/HW-WeatherApp/"}
                        backgroundImage={WeatherAppImg}
                    />
                    {/* Work Scheduler */}
                    <PortfolioItem
                        title={"Work Scheduler"}
                        link={
                            "https://volodymyrbaisa.github.io/HW-Work-Scheduler/"
                        }
                        backgroundImage={WorkSchedulerImg}
                    />
                    {/* Quiz App */}
                    <PortfolioItem
                        title={"Quiz App"}
                        link={"https://volodymyrbaisa.github.io/HW-Quiz-App/"}
                        backgroundImage={QuizAppImg}
                    />
                    {/* Password Generator */}
                    <PortfolioItem
                        title={"Password Generator"}
                        link={
                            "https://volodymyrbaisa.github.io/HW-PasswordGenerator/"
                        }
                        backgroundImage={PasswordGeneratorImg}
                    />
                    {/* Comic Base */}
                    <PortfolioItem
                        title={"Comic Base"}
                        link={
                            "https://volodymyrbaisa.github.io/Project1-Comics-Reader/"
                        }
                        backgroundImage={ComicBaseImg}
                    />
                    {/* How To? */}
                    <PortfolioItem
                        title={"How To?"}
                        link={"https://app-project2.herokuapp.com/posts/"}
                        backgroundImage={Project2Img}
                    />
                    {/* Note Taker */}
                    <PortfolioItem
                        title={"Note Taker"}
                        link={"https://note-traker.herokuapp.com/"}
                        backgroundImage={NoteTakerImg}
                    />
                    {/* Eat De Burger */}
                    <PortfolioItem
                        title={"Eat De Burger"}
                        link={"https://hw-eat-da-burger-13.herokuapp.com/"}
                        backgroundImage={EatDeBurgerImg}
                    />
                </div>
            </section>
        );
    }
}
