import cx from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

import MoreButton from '@/components/common/MoreButton';

import model2 from '@/static/img/model2.png';
import model3 from '@/static/img/model3.png';
import model4 from '@/static/img/model4.png';
import Heading from '@/components/common/Heading';

const SaleSector = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.row}>
        <div className={cx.imgWrapper}>
          <Image src={model2} alt="model2" />
        </div>
        <div className={cx.info}>
          <Heading className={cx.text} tag="h2">
            большая распродажа зимней коллекции -40% на все товары
          </Heading>
          <MoreButton className={cx.moreBtn} />
        </div>
        <div className={cx.imgWrapper}>
          <Image src={model3} alt="model3" />
        </div>
      </div>
      <div className={cx.row}>
        <div className={classNames(cx.greenWrapper, cx.info)}>
          <Heading className={cx.text} tag="h2">
            скидки 20% на аксессуары
          </Heading>
          <MoreButton className={cx.moreBtn} />
        </div>
        <div className={cx.imgWrapper}>
          <Image src={model4} alt="model4" />
        </div>
        <div className={classNames(cx.blueWrapper, cx.info)}>
          <Heading className={cx.text} tag="h2">
            {' '}
            скидки 20% на аксессуары
          </Heading>
          <MoreButton className={cx.moreBtn} />
        </div>
      </div>
    </div>
  );
};

export default SaleSector;
