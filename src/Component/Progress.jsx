
import React, { Fragment } from 'react';
const Progress = () => {
    return (
        <Fragment>
            <div className="progress-container">
                <div className="progress-bar">
                    <div className="assignment-header">
                        <div className="header-due">
                            <h2>
                            Current courses
                         </h2>
                        </div>
                        <div className="view-all">
                            <p>
                                <a href="">View all</a>
                            </p>
                        </div>
                    </div>
                   <div class="progress" data-width="80%">
                        <p>
                            UI/UX Design
    </p>
                      
                        <div class="bar bar-1"></div>  
                    </div>

                    <div class="progress" data-width="55%">
                        <p>
                            Web development
    </p>
                        <div class="bar bar-2"></div>
                    </div>

                    <div class="progress" data-width="70%">
                        <p>
                            Graphic design
    </p>
                        <div class="bar bar-3"></div>
                    </div>

                    <div class="progress" data-width="65%">
                        <p>
                            Cloud security
    </p>
                        <div class="bar bar-4"></div>
                    </div>
                    <div class="progress" data-width="80%">
                        <p>
                            Biology
    </p>
                        <div class="bar bar-5"></div>
                    </div>
                </div>

                <div className="circular-progress-bar-container">
                    <div className="circular-bar-header">
                        <h4>Goals</h4>
                    </div>
                    <div className="radial-progress">
                        <img src="logo/PieCircular.png" alt="" />
                        <p>12 out of 25 tasks<br/>completed!</p>
                    </div>
                    <div className="circle-color-container">
                        <div className="circle-color a-1">
                            <img src="logo/Rectangle37.png" alt="" />
                            <p>Completed</p>
                        </div>
                        <div className="circle-color">
                            <img src="logo/Rectangle38.png" alt="" />
                            <p>In progress</p>
                        </div>
                        <div className="circle-color">
                            <img src="logo/Rectangle39.png" alt="" />
                            <p>To do</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Progress;