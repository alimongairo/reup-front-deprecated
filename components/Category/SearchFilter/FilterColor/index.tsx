import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import cx from './index.module.scss';
import { useContext } from 'react';
import { FilterContext } from '..';

const FilterColor = () => {
  const { setFormData } = useContext(FilterContext);

  const setFilterColor = (color: string) => {
    setFormData((state: any) => {
      return { ...state, color };
    });
  };

  return (
    <div className={cx.wrapper_color}>
      <Text size="normal">цвет</Text>
      <div className={cx.btn_group_color}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setFilterColor('white');
          }}
          className={cx.btn_one}
        ></Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setFilterColor('black');
          }}
          className={cx.btn_two}
        ></Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setFilterColor('blue');
          }}
          className={cx.btn_three}
        ></Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setFilterColor('yellow');
          }}
          className={cx.btn_four}
        ></Button>
      </div>
    </div>
  );
};
export default FilterColor;
