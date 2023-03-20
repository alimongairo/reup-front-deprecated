import Heading from '@/components/common/Heading';
import React, { useRef } from 'react';
import FilterColor from './FilterColor';
import FilterPattern from './FilterPattern';
import FilterPrice from './FilterPrice';
import FilterSeason from './FilterSeason';
import FilterSize from './FilterSize';
import FilterStructure from './FilterStructure';
import FilterStyle from './FilterStyle';
import cx from './index.module.scss';

const SearchFilter = () => {
  const formDataObject: any = {};

  const formRef = useRef<any>();

  const onChangeForm = (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      for (const [q, value] of formData) {
        formDataObject[q] = value;
      }
    }
    console.log(formDataObject);
  };

  return (
    <div className={cx.wrapper_filter}>
      <div className={cx.wrapper_content_filters}>
        <Heading tag="h3">фильтры</Heading>

        <form ref={formRef} onChange={onChangeForm}>
          <FilterPrice />
          <FilterSize />
          <FilterStructure />
          <FilterSeason />
          <FilterPattern />
          <FilterStyle />
          <FilterColor />
        </form>
      </div>
    </div>
  );
};

export default SearchFilter;
