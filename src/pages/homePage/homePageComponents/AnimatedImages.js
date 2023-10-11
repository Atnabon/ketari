import React, { useState, useEffect, FC } from "react";
import { CSSTransition } from "react-transition-group";

const AnimatedImages = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [image1Src] = useState("habesha-girl.png");
  const [image2Src] = useState("habesha-guy.png");

  useEffect(() => {
    const interval = setInterval(toggleImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleImage = () => {
    setIsImageVisible((prevIsImageVisible) => !prevIsImageVisible);
  };

  return (
    <div>
      {isImageVisible ? (
        <CSSTransition
          in={isImageVisible}
          timeout={1000} // Duration of the CSS transition
          classNames="image-transition"
          unmountOnExit
        >
          <img height="550px" width="auto" src={image1Src} alt="girl" />
        </CSSTransition>
      ) : (
        <CSSTransition
          in={!isImageVisible}
          timeout={1000} // Duration of the CSS transition
          classNames="image-transition"
          unmountOnExit
        >
          <img height="550px" width="auto" src={image2Src} alt="guy" />
        </CSSTransition>
      )}
    </div>
  );
};

export default AnimatedImages;
