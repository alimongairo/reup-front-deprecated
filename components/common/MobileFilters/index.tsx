import React, { useState } from 'react';

import Button from '@/components/common/Button';
import FullscreenModal from '@/components/common/FullscreenModal';
import FiltersForProducts from '@/components/common/FiltersForProducts';

import cx from './index.module.scss';
import { TFilterData } from '../FiltersForProducts/context';

interface IProps {
  onChangeFilters: (data: TFilterData) => void;
}

const MobileFilters = ({ onChangeFilters }: IProps) => {
  const [filtersVisible, setFiltersVisible] = useState<boolean>(false);
  const [sortVisible, setSortVisible] = useState<boolean>(false);

  const onCloseFIlters = () => {
    setFiltersVisible(false);
  };

  const onOpenFIlters = () => {
    setFiltersVisible(true);
  };

  const onCloseSort = () => {
    setSortVisible(false);
  };

  const onOpenSort = () => {
    setSortVisible(true);
  };

  return (
    <div className={cx.wrapper}>
      <Button onClick={onOpenSort}>Сортировать</Button>
      <Button onClick={onOpenFIlters}>Фильтры</Button>
      <FullscreenModal
        onClose={onCloseFIlters}
        visible={filtersVisible}
        title="фильтры"
      >
        <FiltersForProducts
          isInModal={true}
          onChange={onChangeFilters}
          onModalClose={onCloseFIlters}
          className={cx.filters}
        />
      </FullscreenModal>

      <FullscreenModal
        onClose={onCloseSort}
        visible={sortVisible}
        title="сортировать"
      >
        <div>Сортировать (прикрутить после жобавления на десктопе)</div>
      </FullscreenModal>
    </div>
  );
};

export default MobileFilters;
