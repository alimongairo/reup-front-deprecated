import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import React, { useState } from 'react';
import cx from './index.module.scss';

const FilterSize = () => {
  const [actSizeInt, setActSizeInt] = useState(false);
  const [actSizeRu, setActSizeRu] = useState(false);

  const sizeCheckboxIntActive = (e: any) => {
    e.preventDefault();
    setActSizeInt(true);
    setActSizeRu(false);
  };
  const sizeCheckboxRuActive = (e: any) => {
    e.preventDefault();
    setActSizeRu(true);
    setActSizeInt(false);
  };

  return (
    <div className={cx.wrapper_size}>
      <Heading tag="h4">размер</Heading>

      <div className={cx.size_checkbox}>
        <a
          onClick={(e) => sizeCheckboxRuActive(e)}
          className={actSizeRu ? cx.active : cx.disabled}
          href=""
        >
          ru{' '}
        </a>
        <a
          onClick={(e) => sizeCheckboxIntActive(e)}
          className={actSizeInt ? cx.active : cx.disabled}
          href=""
        >
          int
        </a>
      </div>

      <div className={cx.btn_group_size}>
        <div>
          <Button>s</Button>
          <Button>m</Button>
          <Button>l</Button>
          <Button>xl</Button>
        </div>
        <div>
          <Button>s</Button>
          <Button>m</Button>
          <Button>l</Button>
          <Button>xl</Button>
        </div>
      </div>

      <Text>таблица размеров</Text>
    </div>
  );
};
export default FilterSize;
