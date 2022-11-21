import SaleBanner from '@/components/Main/SaleSector/SaleBanner';

import cx from './index.module.scss';

const SaleSector = () => {
  return (
    <div className={cx.wrapper}>
      <h1>Акции</h1>
      <div className={cx.slider}>
        <SaleBanner />
        <SaleBanner />
      </div>
    </div>
  );
};

export default SaleSector;
