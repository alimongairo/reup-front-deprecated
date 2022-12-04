import Image from 'next/image';
import slide1 from '@/static/img/slide1.png';
import slide2 from '@/static/img/SliderOne_two.png';
import Link from 'next/link';
import { EPagesRoutes } from '@/constants/router';
import moreArrow from '@/static/icons/moreArrow.svg';
import classNames from 'classnames';

import cx from './index.module.scss';

export interface ISlide {
  id: number;
  active: boolean;
  bigImg: any;
  smallImg: any;
  brandName: string;
  brandDescription: string;
}

const Slide = ({
  id,
  active,
  brandDescription,
  brandName,
  bigImg,
  smallImg,
}: ISlide) => {
  return (
    <div className={classNames(cx.slide, active && cx.activeSlide)}>

      <div className={cx.leftBlock}>
        <Image src={bigImg} alt="slide1" />
      </div>

      <div className={cx.rightBlock}>

        <div className={cx.rightBlockFlex}>
          <Image src={smallImg} alt="slide2"/>

          <div className={cx.text}>

            <h1>Новый бренд</h1>

            <div className={cx.borderTop}>

              <h2>{brandName}</h2>
              <p>{brandDescription}</p>

            </div>

            <Link href={`${EPagesRoutes.Brand}/`}>
              <button className={cx.btn}>
                <span>Больше</span>
                <Image src={moreArrow} alt="moreArrow" />
              </button>
            </Link>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Slide;
