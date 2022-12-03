import { useEffect, useRef, useState } from 'react';
import BlockOne from './BlockOne';
import BlockTwo from './BlockTwo';
import cx from './index.module.scss';

const Slider = () => {
  const [oneSlide, setOneSlide] = useState(true);

  const clickArrow = () => {
    setOneSlide(!oneSlide);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setOneSlide(!oneSlide);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [oneSlide]);

  return (
    <div className={cx.wrapper}>
      
      <div onClick={() => clickArrow()} className={cx.arrowLeft}>
        <img src="../../../static/Slider/icons/Arrow-left.svg" alt="Arrow left" />
      </div>

      {oneSlide ? <BlockOne /> : <BlockTwo />}

      <div onClick={() => clickArrow()} className={cx.arrowRight}>
        <img src="../../../static/Slider/icons/Arrow-right.svg" alt="Arrow right" />
      </div>    
    </div>
  ) 
};

export default Slider;
