import Button from '@/components/common/Button';

import cx from './index.module.scss';

const Category = () => {
  return (
    <div className={cx.wrapper}>
      <Button className={cx.right}>верхняя одежда</Button>
      <Button className={cx.right}>обувь</Button>
      <Button className={cx.left}>сумки</Button>
      <Button className={cx.left}>рубашки</Button>
      <Button className={cx.center}>платья</Button>
      <Button className={cx.center}>костюмы</Button>
      <Button className={cx.right}>штаны</Button>
      <Button className={cx.right}>аксессуары</Button>
    </div>
  );
};

export default Category;
