import React from 'react';

import Button from '@/components/common/Button';

import cx from './index.module.scss';

interface IProps {}

const MobileFilters = ({}: IProps) => {
  return (
    <div className={cx.wrapper}>
      <Button>Сортировать</Button>
      <Button>Фильтры</Button>
    </div>
  );
};

export default MobileFilters;
