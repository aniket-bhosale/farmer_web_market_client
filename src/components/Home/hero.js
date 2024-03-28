// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Hero.css";


// import 

// function Hero({ categoryContainerRef }) {
//   const navigate = useNavigate();

//   const scrollToCategoryContainer = () => {
//     if (categoryContainerRef.current) {
//       categoryContainerRef.current.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="Hero">
//       <video autoPlay loop muted playsInline className="hero-video">
//         <source src={videoSource} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="hero-content center">
//         <h1 className="heading">Get Farm Fresh Produce Delivered To You!</h1>
//         <p className="subheading">Take what you need</p>


//         <button onClick={scrollToCategoryContainer} className="button">
//           Explore More
//         </button>

//       </div>
//     </div>
//   );
// }

// export default Hero;



import videoSource from "./farmers.mp4";


import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero({ categoryContainerRef }) {
  const navigate = useNavigate();

  const scrollToCategoryContainer = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="Hero">
      <video autoPlay loop muted playsInline className="hero-video">
        {<source src={videoSource} type="video/mp4" />}
      </video>
      <div className="hero-content center">
        <h1 className="heading">Get Farm Fresh Produce Delivered To You!</h1>
        <p className="subheading">Take what you need</p>
        {/* Use onClick to trigger scrolling to the category container */}
        <button onClick={scrollToCategoryContainer} className="button">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Hero;

