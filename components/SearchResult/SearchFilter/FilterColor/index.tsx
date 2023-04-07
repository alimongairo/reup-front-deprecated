import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import cx from './index.module.scss';

const FilterColor = () => {
  return (
    <div className={cx.wrapper_color}>
      <Text size="normal">цвет</Text>
      <div className={cx.btn_group_color}>
        <Button className={cx.btn_one}></Button>
        <Button className={cx.btn_two}></Button>
        <Button className={cx.btn_three}></Button>
        <Button className={cx.btn_four}></Button>
      </div>
    </div>
  );
};
export default FilterColor;
