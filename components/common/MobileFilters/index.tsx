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
  // TODO: сделать универсальную штучку, что у нас открыто, фильтры или сортировка, и в завсимости от этого передавать контент в модалку
  // TODO: добавить в FiltersForProducts (FiltersForProductsMobile (isInFullModal) поиск
  const [filtersVisible, setFiltersVisible] = useState<boolean>(false);

  const onClose = () => {
    setFiltersVisible(false);
  };

  const onOpen = () => {
    setFiltersVisible(true);
  };

  return (
    <div className={cx.wrapper}>
      <Button onClick={onOpen}>Сортировать</Button>
      {/* <Button>Фильтры</Button> */}
      <FullscreenModal
        onClose={onClose}
        visible={filtersVisible}
        title="FullscreenModal"
      >
        <FiltersForProducts
          isInModal={true}
          onChange={onChangeFilters}
          onModalClose={onClose}
        />
      </FullscreenModal>
    </div>
  );
};

export default MobileFilters;
