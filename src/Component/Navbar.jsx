import React, { Fragment } from 'react';
import { Animated } from "react-animated-css";
const Navbar = () => {
    return (
        <Fragment>
            <div className="nav-container">
                <Animated animationIn=" slideInDown " animationOut=" fadeOut " animationInDelay="150" isVisible={true}>
                    <div className="richedu-logo">
                        <img src="logo/logo.jpg" alt="" className="logo" />
                    </div>
                </Animated>

                <div className="list">
                    <Animated animationIn=" fadeInLeft " animationOut=" fadeOut " animationInDelay="100" isVisible={true}>
                        <div className="menu-list ">
                            <img src="logo/Planet.png" alt="" />
                            <a >Command center</a>
                        </div>
                    </Animated>
                    <Animated animationIn="fadeInLeft " animationOut=" fadeOut " animationInDelay="200" isVisible={true}>
                        <div className="menu-list ">
                            <img src="logo/Atom.png" alt="" />
                            <a >Courses</a>
                        </div>
                    </Animated>
                    <Animated animationIn=" fadeInLeft " animationOut=" fadeOut " animationInDelay="300" isVisible={true}>
                        <div className="menu-list ">
                            <img src="logo/Target.png" alt="" />
                            <a >Assignments</a>
                        </div>
                    </Animated>
                    <Animated animationIn="fadeInLeft " animationOut=" fadeOut " animationInDelay="400" isVisible={true}>
                        <div className="menu-list ">
                            <img src="logo/FinnTheHuman.png" alt="" />
                            <a >My Friends</a>
                        </div>
                    </Animated>

                    <Animated animationIn=" fadeInLeft " animationOut=" fadeOut " animationInDelay="500" isVisible={true}>
                        <div className="menu-list ">
                            <img src="logo/Users.png" alt="" />
                            <a >Clubs</a>
                        </div>
                    </Animated>
                    <Animated animationIn="fadeInLeft " animationOut=" fadeOut " animationInDelay="600" isVisible={true}>
                        <div className="menu-list ">
                            <img src="logo/Calendar.png" alt="" />
                            <a >Calendar</a>
                        </div>
                    </Animated>
                    <Animated animationIn=" fadeInLeft" animationOut=" fadeOut " animationInDelay="700" isVisible={true}>
                        <div className="menu-list ">
                            <img src="logo/GameController.png" alt="" />
                            <a >Social hub</a>
                        </div>
                    </Animated>

                </div>
            </div>
        </Fragment>
    );
}
export default Navbar;

