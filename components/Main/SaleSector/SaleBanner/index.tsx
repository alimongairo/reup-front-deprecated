import cx from './index.module.scss';

const SaleBanner = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.banner}></div>
      <h2>Название акции</h2>
    </div>
  );
};

export default SaleBanner;
