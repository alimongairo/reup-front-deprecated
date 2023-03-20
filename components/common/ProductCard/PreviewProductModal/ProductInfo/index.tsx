import Text from '@/components/common/Text';

import cx from './index.module.scss';

const ProductInfo = () => {
  return (
    <div>
      <div className={cx.row}>
        <Text className={cx.title}>состав</Text>
        <Text size="thin">какой-то состав</Text>
      </div>
      <div className={cx.row}>
        <Text className={cx.title}>сезон</Text>
        <Text size="thin">зима-лето</Text>
      </div>
      <div className={cx.row}>
        <Text className={cx.title}>узор</Text>
        <Text size="thin">зебра</Text>
      </div>
      <div className={cx.row}>
        <Text className={cx.title}>стиль</Text>
        <Text size="thin">постмодерн</Text>
      </div>
      <div className={cx.row}>
        <Text className={cx.title}>цвет</Text>
        <Text size="thin">белый</Text>
      </div>
    </div>
  );
};

export default ProductInfo;
