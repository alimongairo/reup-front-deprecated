import { EPagesRoutes } from '@/constants/router';
import moreArrow from '@/static/icons/moreArrow.svg';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import cx from './index.module.scss';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const moreHandler = () => {
    router.push(`${EPagesRoutes.Brand}/${id}`);
  };

  return (
    <div
      className={classNames(cx.slide, cx.fade)}
      style={{ display: active ? 'flex' : 'none' }}
    >
      <div className={cx.side}>
        <Image src={bigImg} alt="slide1" />
      </div>
      <div className={cx.side}>
        <Image src={smallImg} alt="slide2" />
        <div className={cx.text}>
          <h1>Новый бренд</h1>
          <div>
            <h2>{brandName}</h2>
            <p>{brandDescription}</p>
            <button className={cx.btn} onClick={moreHandler}>
              <span>больше</span>
              <Image src={moreArrow} alt="moreArrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
