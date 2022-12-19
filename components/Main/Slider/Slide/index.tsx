import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import { EPagesRoutes } from '@/constants/router';

import moreArrow from '@/static/icons/moreArrow.svg';

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
          <Heading>новый бренд</Heading>
          <div>
            <Heading size="medium">{brandName}</Heading>
            <Text>{brandDescription}</Text>
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
