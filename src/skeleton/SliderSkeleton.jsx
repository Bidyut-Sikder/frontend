import React from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import groovyWalkAnimation from "../components/Animation - 1704276953004.json";
import Lottie from "lottie-react";
import Cookies from "js-cookie";
//<Lottie animationData={groovyWalkAnimation} loop={false} />
//

const SliderSkeleton = () => {
 (() => {
  const token = Cookies.get("token");
  console.log(token);
 })();

 return (
  <div className="container-fluid hero-bg">
   <div className="row">
    {Array.from({length: 15}).map((element, i) => {
     return (
      <div key={i} className="row justify-content-center">
       <div className="col-12 col-lg col-sm-12 col-md-5 p-5">
        <Skeleton count={6} />
       </div>
       <div className="col-12 col-lg col-sm-12 col-md-5 p-5">
        <Lottie animationData={groovyWalkAnimation} loop={true} />
       </div>
      </div>
     );
    })}
   </div>

   <SkeletonTheme baseColor="green" highlightColor="#444">
    <p>
     <Skeleton count={3} />
    </p>
   </SkeletonTheme>
  </div>
 );
};

export default SliderSkeleton;

// Array.from({length:5}).map(()=>{
// console.log(5)
// })
