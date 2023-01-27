import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import MoreButton from '@/components/common/MoreButton';

import { EPagesRoutes } from '@/constants/router';

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
      style={{ display: active ? 'grid' : 'none' }}
    >
      <div className={cx.bigImg}>
        <Image src={bigImg} alt="slide1" />
      </div>
      <div className={cx.smallImg}>
        <Image src={smallImg} alt="slide2" />
      </div>
      <div className={cx.text}>
        <Heading>новый бренд</Heading>
        <div className={cx.underLine}>
          <Heading size="medium">{brandName}</Heading>
          <Text>{brandDescription}</Text>
          <MoreButton className={cx.moreBtn} onClick={moreHandler} />
        </div>
      </div>
    </div>
  );
};

export default Slide;
