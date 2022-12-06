import { EPagesRoutes } from '@/constants/router';
import Image from 'next/image';
import Link from 'next/link';
import moreArrow from '@/static/icons/moreArrow.svg';
import cx from './index.module.scss';
import classNames from 'classnames';

export interface ISlide {
  id: number;
  active: boolean;
  bigImg: any;
  smallImg: any;
  brandName: string;
  brandDescription: string;
}

const BlockOne = ({
  id,
  active,
  brandDescription,
  brandName,
  bigImg,
  smallImg,}:ISlide) => {
  return (
    
    <div className={classNames(cx.wrapper, active && cx.activeSlide)}>

      <div className={cx.leftBlock}>
        {/* <img src="../../../static/Slider/img/SliderOne_one.png" alt="" /> */}
        <Image src={bigImg} alt="slide1" />
      </div>

      <div className={cx.rightBlock}>
        <div className={cx.upRight}>
          {/* <img src="../../../static/Slider/img/SliderOne_two.png" alt="" /> */}
          <Image src={smallImg} alt="slide2" />
        </div>
       
        <div className={cx.downRight}>
          <div>
            <h1>Новый бренд</h1>
            <div className={cx.borderTop}>
              <h2>{brandName}</h2>
              <p>{brandDescription}</p>
            </div> 
            <Link href={`${EPagesRoutes.Brand}/`}>
              <button className={cx.btn}>
                {/* <img src="../../../static/Slider/icons/Arrow-big.svg" alt="Arrow big" /> */}
                <Image src={moreArrow} alt="moreArrow" />
              </button>
            </Link>                   
          </div>       
        </div>
      </div>
  
    </div>
  ) 
};

export default BlockOne;
