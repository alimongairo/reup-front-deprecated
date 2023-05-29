import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useWindowSize } from '@/hooks/useWindow';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import MoreButton from '@/components/common/MoreButton';
import bigImgHeaderMobile from '@/static/img/bigImgHeaderMobile.png';
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
  const windowSize = useWindowSize();
  const router = useRouter();

  const moreHandler = () => {
    router.push(`${EPagesRoutes.Brand}/${id}?schemeNum=${0}`);
  };

  return (
    <div
      className={classNames(cx.slide, cx.fade)}
      style={{ display: active ? 'grid' : 'none' }}
    >
      {windowSize?.width < 586 ? (
        <Image src={bigImgHeaderMobile} alt="slide1" />
      ) : (
        <Image src={bigImg} alt="slide1" />
      )}

      <div className={cx.rightSide}>
        <Image src={smallImg} alt="slide2" />
        <div className={cx.text}>
          <Heading>новый бренд</Heading>
          <div className={cx.divider} />
          <div>
            <Heading tag="h2">{brandName}</Heading>
            <div className={cx.mainContent}>
              <Text size="thin" className={cx.mainText}>
                {brandDescription}
              </Text>
              <MoreButton className={cx.moreBtn} onClick={moreHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
