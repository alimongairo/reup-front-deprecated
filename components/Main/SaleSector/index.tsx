import cx from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

import model2 from '@/static/img/model2.png';
import model3 from '@/static/img/model3.png';
import model4 from '@/static/img/model4.png';

const SaleSector = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.row}>
        <div className={cx.imgWrapper}>
          <Image src={model2} alt="model2" />
        </div>
        <div className={cx.info}>
          <h1>большая распродажа зимней коллекции -40% на все товары</h1>
          <span>больше</span>
        </div>
        <div className={cx.imgWrapper}>
          <Image src={model3} alt="model3" />
        </div>
      </div>
      <div className={cx.row}>
        <div className={classNames(cx.orangeWrapper, cx.info)}>
          <h1>скидки 20% на аксессуары</h1>
          <span>больше</span>
        </div>
        <div className={cx.imgWrapper}>
          <Image src={model4} alt="model4" />
        </div>
        <div className={classNames(cx.blueWrapper, cx.info)}>
          <h1>скидки 20% на аксессуары</h1>
          <span>больше</span>
        </div>
      </div>
    </div>
  );
};

export default SaleSector;
