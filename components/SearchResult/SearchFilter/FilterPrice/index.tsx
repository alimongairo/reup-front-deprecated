import Heading from '@/components/common/Heading';
import Input from '@/components/common/Input';
import React from 'react';
import cx from './index.module.scss';

const FilterPrice = () => {
  return (
    <div className={cx.wrapper_price}>
      <Heading tag="h4">цена</Heading>
      <div className={cx.price_input}>
        <Input placeholder="от" />
        <Input placeholder="до" />
      </div>

      <div className={cx.governor}>
        {' '}
        {/* Реализовать блок с ползунком*/}
        <div className={cx.governor_border}></div>
        <span>320</span>
      </div>
    </div>
  );
};
export default FilterPrice;
