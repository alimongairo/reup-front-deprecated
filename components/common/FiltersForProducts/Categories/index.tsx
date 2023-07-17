import Text from '@/components/common/Text';

import cx from '@/components/common/FiltersForProducts/index.module.scss';

const Categories = () => {
  return (
    <div className={cx.filterItem}>
      <Text className={cx.subTitle}>категории</Text>
    </div>
  );
};

export default Categories;
