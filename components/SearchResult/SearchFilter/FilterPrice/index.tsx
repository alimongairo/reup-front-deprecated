import Input from '@/components/common/Input';
import Text from '@/components/common/Text';
import cx from './index.module.scss';

const FilterPrice = () => {
  const price = {
    min: null,
    max: null,
  };

  return (
    <div className={cx.wrapper_price}>
      <Text size="normal">цена</Text>
      <div className={cx.price_input}>
        <Input placeholder="от" name="minPrice" />
        <Input placeholder="до" name="maxPrice" />
      </div>
    </div>
  );
};
export default FilterPrice;
