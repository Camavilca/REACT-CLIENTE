import React from "react";
import VideoCarousel from '../reutilizable/Carousel'
import HomeBaner from '../reutilizable/Baner';
import Login from '../user/login/Login';
import {
  
} from "mdbreact";

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeBaner />
        <hr className="my-5 mx-5 bg-info" />
        <div>
        <Login/>
        </div>
        <VideoCarousel/>
      </div>
    );
  }
}

export default Home;
 