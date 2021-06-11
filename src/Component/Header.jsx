import React, { Fragment } from 'react';
import { Animated } from "react-animated-css";
const Header = () => {
    return (
        <Fragment>

            <div className="header-container">
                <div className="header-1">
                   
                        <h1>Welcome back jane!</h1>
                  
                </div>
                <div className="search-bar">
                    <Animated animationIn=" fadeInDown " animationOut=" fadeOut " animationInDelay="250" isVisible={true}>
                        <div className="search">
                            <img src="logo/search.png" alt="" />
                            <input type="search" placeholder="Search" />
                        </div>
                    </Animated>
                    <Animated animationIn=" fadeInDown " animationOut=" fadeOut " animationInDelay="350" isVisible={true}>
                        <div className="arrow">
                            <img src="logo/Paper.png" alt="" />
                        </div>
                    </Animated>
                    <Animated animationIn=" fadeInDown " animationOut=" fadeOut " animationInDelay="450" isVisible={true}>
                        <div className="notif-icon">
                            <img src="logo/notif.png" alt="" />
                        </div>
                    </Animated>
                    <Animated animationIn=" fadeInDown " animationOut=" fadeOut " animationInDelay="550" isVisible={true}>
                        <div className="profile">
                            <img src="logo/image.jpg" alt="" />
                        </div>
                    </Animated>
                    <Animated animationIn=" fadeInDown " animationOut=" fadeOut " animationInDelay="650" isVisible={true}>
                        <div className="dropdown-icon">
                            <img src="logo/Arrow.png" alt="" />
                        </div>
                    </Animated>

                </div>
            </div>
        </Fragment>

    );
}

export default Header;