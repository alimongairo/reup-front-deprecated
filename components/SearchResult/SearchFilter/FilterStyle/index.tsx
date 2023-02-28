import Text from '@/components/common/Text';
import Image from 'next/image';
import React from 'react';
import Plus from '@/static/icons/plus.svg';
import cx from './index.module.scss';

const FilterStyle = () => {
  return (
    <div className={cx.wrapper_style}>
      <Text>стиль</Text>
      <Image src={Plus} alt="Plus" />
    </div>
  );
};
export default FilterStyle;
