import Heading from '@/components/common/Heading';
import React from 'react';
import FilterColor from './FilterColor';
import FilterPattern from './FilterPattern';
import FilterPrice from './FilterPrice';
import FilterSeason from './FilterSeason';
import FilterSize from './FilterSize';
import FilterStructure from './FilterStructure';
import FilterStyle from './FilterStyle';
import cx from './index.module.scss';

const SearchFilter = () => {
  return (
    <div className={cx.wrapper_filter}>
      <div className={cx.wrapper_content_filters}>
        <Heading tag="h3">фильтры</Heading>

        <FilterPrice />
        <FilterSize />
        <FilterStructure />
        <FilterSeason />
        <FilterPattern />
        <FilterStyle />
        <FilterColor />
      </div>
    </div>
  );
};

export default SearchFilter;
