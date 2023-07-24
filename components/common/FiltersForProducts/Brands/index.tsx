import Text from '@/components/common/Text';
import DropdownSearch from '@/components/common/DropdownSearch';
import cx from '@/components/common/FiltersForProducts/index.module.scss';

const Brands = () => {
  return (
    <div>
      <div className={cx.filterItem}>
        <Text className={cx.subTitle} size="big">
          бренды
        </Text>
        <DropdownSearch />
      </div>
    </div>
  );
};

export default Brands;
