import Heading from '@/components/common/Heading';
import Input from '@/components/common/Input';
import React, { useState } from 'react';
import FilterPriceGovernor from './FilterPriceGovernor';
import cx from './index.module.scss';

const FilterPrice = () => {
  const [valuePriceOt, setValuePriceOt] = useState('50');
  const [valuePriceDo, setValuePriceDo] = useState('50');
  // const focusInput = ;
  return (
    <div className={cx.wrapper_price}>
      <Heading tag="h4">цена</Heading>
      <div className={cx.price_input}>
        <Input placeholder="от" value={valuePriceOt} />
        <Input placeholder="до" value={valuePriceOt} />
      </div>

      <FilterPriceGovernor
        valuePriceDo={valuePriceDo}
        setValuePriceDo={setValuePriceDo}
        valuePriceOt={valuePriceOt}
        setValuePriceOt={setValuePriceOt}
      />
    </div>
  );
};
export default FilterPrice;
