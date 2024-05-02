import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationPath }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current, // 绑定动画容器
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: animationPath // 动画资源路径
    });

    return () => anim.destroy(); // 清理动画
  }, [animationPath]);

  return <div ref={animationContainer} />;
};

export default LottieAnimation;
