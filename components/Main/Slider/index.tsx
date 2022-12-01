import { useEffect, useState } from 'react';
import BlockOne from './BlockOne';
import BlockTwo from './BlockTwo';
import cx from './index.module.scss';

const Slider = () => {
  const [oneSlide, setOneSlide] = useState(true);
  const [depression, setDepression] = useState(false);

  const clickArrow = () => {
    setOneSlide(!oneSlide);
    setDepression(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setOneSlide(!oneSlide);
      setDepression(true);
    }, 2000);
    setDepression(false);

    return () => {
      clearInterval(interval);
    };
  }, [oneSlide]);

  return (
    <div className={cx.wrapper}>
      
      <div onClick={() => clickArrow()} className={cx.arrowLeft}>
        <img src="../../../static/Slider/icons/Arrow-left.svg" alt="Arrow left" />
      </div>

      <BlockOne onClickDepression={depression}/>

      {/* {oneSlide ? <BlockOne /> : <BlockTwo />} */}

      <div onClick={() => clickArrow()} className={cx.arrowRight}>
        <img src="../../../static/Slider/icons/Arrow-right.svg" alt="Arrow right" />
      </div>    
    </div>
  ) 
};

export default Slider;
