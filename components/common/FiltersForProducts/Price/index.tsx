import Text from '@/components/common/Text';
import Input from '@/components/common/Input';

import cx from '@/components/common/FiltersForProducts/index.module.scss';

const Price = () => {
  return (
    <div className={cx.filterItem}>
      <Text className={cx.subTitle}>цена</Text>
      <div className={cx.filterItemContent}>
        <Input placeholder="от" name="priceStart" />
        <Input placeholder="до" name="priceEnd" />
      </div>
    </div>
  );
};

export default Price;
