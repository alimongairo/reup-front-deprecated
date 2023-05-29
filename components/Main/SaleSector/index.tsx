import cx from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

import MoreButton from '@/components/common/MoreButton';

import model2 from '@/static/img/model2.png';
import model2Mobile from '@/static/img/modelMobile.png';
import model3 from '@/static/img/model3.png';
import model3Mobile from '@/static/img/model3Mobile.png';
import model4 from '@/static/img/model4.png';
import model4Mobile from '@/static/img/model4Mobile.png';
import { useWindowSize } from '@/hooks/useWindow';

const SaleSector = () => {
  const windowSize = useWindowSize();

  return (
    <div className={cx.wrapper}>
      {windowSize?.width <= 586 ? (
        <div className={cx.saleSectorMobile}>
          <div className={cx.upBlockMobile}>
            <div className={cx.imgWrapperMobile}>
              <Image src={model2Mobile} alt="model2" />
            </div>
            <div className={cx.infoMobile}>
              <h3>большая распродажа зимней коллекции -40% на все товары</h3>
              <MoreButton className={cx.moreBtn} />
            </div>
          </div>

          <div className={cx.rowMobile}>
            <div className={classNames(cx.greenWrapperMobile, cx.infoMobile)}>
              <h3>скидки 20% на аксессуары</h3>
              <MoreButton className={cx.moreBtn} />
            </div>
            <div className={classNames(cx.imgWrapperMobile)}>
              <Image src={model4Mobile} alt="model4" />
            </div>
          </div>

          <div className={cx.row}>
            <div className={cx.imgWrapperMobile3}>
              <Image src={model3Mobile} alt="model3" />
            </div>
          </div>

          <div className={classNames(cx.rowMobile, cx.rowMobileLast)}>
            <div
              className={classNames(cx.blueWrapper, cx.infoMobile, cx.lastRow)}
            >
              <h3>скидки 20% на аксессуары</h3>
              <MoreButton className={cx.moreBtn} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={cx.row}>
            <div className={cx.imgWrapper}>
              <Image src={model2} alt="model2" />
            </div>
            <div className={cx.info}>
              <h3>большая распродажа зимней коллекции -40% на все товары</h3>
              <MoreButton className={cx.moreBtn} />
            </div>
            <div className={cx.imgWrapper}>
              <Image src={model3} alt="model3" />
            </div>
          </div>
          <div className={cx.row}>
            <div className={classNames(cx.greenWrapper, cx.info)}>
              <h1>скидки 20% на аксессуары</h1>
              <MoreButton className={cx.moreBtn} />
            </div>
            <div className={cx.imgWrapper}>
              <Image src={model4} alt="model4" />
            </div>
            <div className={classNames(cx.blueWrapper, cx.info)}>
              <h1>скидки 20% на аксессуары</h1>
              <MoreButton className={cx.moreBtn} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SaleSector;
