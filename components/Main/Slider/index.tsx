import { useEffect, useRef, useState } from 'react';
import BlockOne from './BlockOne';
import BlockTwo from './BlockTwo';
import cx from './index.module.scss';

const Slider = () => {
  const [oneSlide, setOneSlide] = useState(true);
  const [depressionLeft, setDepressionLeft] = useState(false);
  const [depressionRight, setDepressionRight] = useState(false);

  const clickArrowLeft = () => {
    setOneSlide(!oneSlide);
    setDepressionLeft(true);
    console.log(depressionLeft);
  }

  const clickArrowRight = () => {
    setOneSlide(!oneSlide);
    setDepressionRight(true);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setOneSlide(!oneSlide);
  //     setDepression(true);
  //   }, 5000);
  //   setDepression(false);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [oneSlide]);

  return (
    <div className={cx.wrapper}>
      
      <div onClick={() => clickArrowLeft()} className={cx.arrowLeft}>
        <img src="../../../static/Slider/icons/Arrow-left.svg" alt="Arrow left" />
      </div>

      {/* <BlockOne depressionLeft={depressionLeft} depressionRight={depressionRight}/> */}

      {oneSlide ? <BlockOne depressionLeft={depressionLeft} depressionRight={depressionRight}/> : <BlockTwo />}

      <div onClick={() => clickArrowRight()} className={cx.arrowRight}>
        <img src="../../../static/Slider/icons/Arrow-right.svg" alt="Arrow right" />
      </div>    
    </div>
  ) 
};

export default Slider;
