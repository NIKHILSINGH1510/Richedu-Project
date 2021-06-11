import React, { Fragment } from 'react';
import { Animated } from "react-animated-css";
const Assignments = () => {
    return (
        <Fragment>
            <div className="assignments-container">
                {/* Header-secton */}
                <div className="assignment-due">
                    <div className="assignment-header">
                        <div className="header-due">
                            <h2>
                                Assignments due
                         </h2>
                        </div>
                        <div className="view-all">
                            <p>
                                <a href="">View all</a>
                            </p>
                        </div>
                    </div>
                    {/* middle-secton */}
                    <div className="middle-section">
                        <div className="month">
                            <Animated animationIn=" fadeInDown " animationOut=" fadeOut " animationInDelay="100" isVisible={true}>
                                <div className="month-square color-1">
                                    <p className="months">Jun</p>
                                    <p className="days">12</p>
                                </div>
                            </Animated>
                            <Animated animationIn=" slideInDown " animationOut=" fadeOut " animationInDelay="200" isVisible={true}> <div className="month-square color-2">
                                <p className="months">Jun</p>
                                <p className="days">14</p>
                            </div>
                            </Animated>
                            <Animated animationIn=" slideInDown " animationOut=" fadeOut " animationInDelay="300" isVisible={true}><div className="month-square color-3">
                                <p className="months">Jun</p>
                                <p className="days">15</p>
                            </div></Animated>
                            <Animated animationIn=" slideInDown " animationOut=" fadeOut " animationInDelay="400" isVisible={true}><div className="month-square color-4">
                                <p className="months">Jun</p>
                                <p className="days">18</p>
                            </div></Animated>
                            <Animated animationIn=" slideInDown " animationOut=" fadeOut " animationInDelay="500" isVisible={true}><div className="month-square color-5">
                                <p className="months">Jun</p>
                                <p className="days">22</p>
                            </div></Animated>
                        </div>
                        <div className="text-container">
                            <Animated style={{ width: "70%" }} animationIn=" fadeInLeft " animationOut=" fadeOut " animationInDelay="300" >
                                <div className="massage massage-top">
                                    <p className="massage-header-text">Web development</p>
                                    <p className="massage-text">
                                        Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry.
                            </p>
                                </div>
                            </Animated>
                            <Animated style={{ width: "70%" }} animationIn=" fadeInRight " animationOut=" fadeOut " animationInDelay="300">
                                <div className="massage">
                                    <p className="massage-header-text">Graphic design</p>
                                    <p className="massage-text">
                                        Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry.
                            </p>
                                </div>
                            </Animated>
                        </div>
                    </div>
                </div>
                <div className="leaderboard-container">
                    <div className="leaderboard">
                        <div className="leaderboard-header">
                            <h3>Leaderboard</h3>
                            <img src="logo/Trophy.png" alt="" />
                            <div className="coin">
                                <p className="coin-text">Coins:</p>
                                <p className="coin-text-number">10</p>
                                <img src="logo/Coin.png" alt="" />
                            </div>
                        </div>
                        <Animated style={{ width: "85%" }} animationIn=" fadeIn " animationOut=" fadeOut " animationInDelay="200" isVisible={true}>
                            <div className="leader-name">
                                <p className="p1 p-1">1</p>
                                <p className="p2 p-1">Mark Lee</p>
                                <p className="p3 p-1">110</p>
                                <img className="big-coin-icon" src="logo/bigcoin.png" alt="" />
                            </div>
                        </Animated>
                        <Animated style={{ width: "85%" }} animationIn=" fadeIn " animationOut=" fadeOut " animationInDelay="400" isVisible={true}>
                            <div className="leader-name">
                                <p className="p1 p-1">2</p>
                                <p className="p2 p-1">Anna Flores</p>
                                <p className="p3 p-1" style={{ marginLeft: "35%" }}>97</p>
                                <img className="big-coin-icon" src="logo/bigcoin.png" alt="" />
                            </div>
                        </Animated>
                        <Animated style={{ width: "85%" }} animationIn=" fadeIn " animationOut=" fadeOut " animationInDelay="600" isVisible={true}>
                            <div className="leader-name">
                                <p className="p1 p-1">3</p>
                                <p className="p2 p-1">Jay Park</p>
                                <p className="p3 p-1" style={{ marginLeft: "43%" }}>80</p>
                                <img className="big-coin-icon" src="logo/bigcoin.png" alt="" />
                            </div>
                        </Animated>
                        <Animated style={{ width: "85%" }} animationIn=" fadeIn " animationOut=" fadeOut " animationInDelay="800" isVisible={true}>
                            <div className="leader-name gradient">
                                <p className="p1 p-1 p-gradient" style={{ fontSize: "18px" }}>103</p>
                                <p className="p2 p-1 p-gradient" style={{ fontSize: "17px", marginLeft: "12%" }}>Jane Adams</p>
                                <p className="p3 p-1 p-gradient">10</p>
                                <img className="big-coin-icon" src="logo/bigcoin.png" alt="" />
                            </div>
                        </Animated>
                    </div>
                    <div className="today-task-container">
                        <div className="today-header">
                            <p className="today-header-text-1">Today’s Tasks:</p><p className="today-header-text-2">(2)</p>
                        </div>
                        <Animated animationIn=" zoomInLeft " animationOut=" fadeOut " animationInDelay="200" isVisible={true}>
                            <div className="today-text today-text-1"><img src="logo/star.png" alt="" /><p>French Assignment</p></div>
                        </Animated>
                        <Animated animationIn=" zoomInLeft " animationOut=" fadeOut " animationInDelay="400" isVisible={true}>
                            <div className="today-text"><img src="logo/stargray.png" alt="" /><p className="gray-text-today">Biology Homework</p></div>
                        </Animated>
                        <Animated animationIn=" zoomInLeft " animationOut=" fadeOut " animationInDelay="600" isVisible={true}>
                            <div className="today-text"><img src="logo/star.png" alt="" /><p>Get the gold badge</p></div>
                        </Animated>
                        <Animated animationIn=" zoomInLeft " animationOut=" fadeOut " animationInDelay="800" isVisible={true}>
                            <div className="today-text"><img src="logo/stargray.png" alt="" /><p className="gray-text-today">Create an App</p></div>
                        </Animated>
                        <Animated animationIn=" fadeIn " animationOut=" fadeOut " animationInDelay="600" isVisible={true}>
                            <div className="today-add-button"><img src="logo/carbon_add-alt.png" alt="" /><p>Add New Task</p></div>
                        </Animated>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Assignments;