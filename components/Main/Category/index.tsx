import Button from '@/components/common/Button';

import cx from './index.module.scss';

const Category = () => {
  return (
    <div className={cx.wrapper}>
      <Button className={cx.right}>локальные бренды</Button>
      <Button className={cx.right}>парфюм</Button>
      <Button className={cx.left}>обувь</Button>
      <Button className={cx.left}>винтаж</Button>
      <Button className={cx.center}>аксессуары</Button>
      <Button className={cx.center}>ювелирка</Button>
      <Button className={cx.right}>Upcycle</Button>
      <Button className={cx.right}>вторые ручки</Button>
    </div>
  );
};

export default Category;
