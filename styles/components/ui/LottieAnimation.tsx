import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationPath }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: animationPath 
    });

    return () => anim.destroy(); 
  }, [animationPath]);

  return <div ref={animationContainer} />;
};

export default LottieAnimation;
