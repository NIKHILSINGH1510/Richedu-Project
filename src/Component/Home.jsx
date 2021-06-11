import React, {Fragment} from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Assignments from './Assignments';
import Progress from './Progress';

const Home = () => {
    return ( 
        <Fragment>
           <div id = "container">
           <div id="navbar-rest">
             <Navbar/>
           </div> 
           <div id="page-container">
           <Header/>
           <Assignments/>
           <Progress/>
           </div>
           </div>
        </Fragment>
     );
}
 
export default Home;