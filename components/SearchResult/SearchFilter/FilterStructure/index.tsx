import Text from '@/components/common/Text';
import Image from 'next/image';
import React from 'react';
import Plus from '@/static/icons/plus.svg';
import cx from './index.module.scss';

const FilterStructure = () => {
  return (
    <div className={cx.wrapper_structure}>
      <Text>состав</Text>
      <Image src={Plus} alt="Plus" />
    </div>
  );
};
export default FilterStructure;
