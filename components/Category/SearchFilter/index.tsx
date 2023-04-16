import Heading from '@/components/common/Heading';
import React, { createContext, useMemo, useRef, useState } from 'react';
import FilterColor from './FilterColor';
import FilterPattern from './FilterPattern';
import FilterPrice from './FilterPrice';
import FilterSeason from './FilterSeason';
import FilterSize from './FilterSize';
import FilterStructure from './FilterStructure';
import FilterStyle from './FilterStyle';
import cx from './index.module.scss';
import Input from '@/components/common/Input';

export const FilterContext = createContext<any>(null);

const SearchFilter = () => {
  const formDataObject: any = {};
  const [formData, setFormData] = useState<any>({});

  const formRef = useRef<any>();

  const onChangeForm = (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      const newValue = new FormData(formRef.current);
      for (const [q, value] of newValue) {
        formDataObject[q] = value;
      }
      setFormData((state: any) => {
        const newState = { ...state };
        for (const [q, value] of newValue) {
          newState[q] = value;
        }
        return newState;
      });
    }
  };

  const contextValue = useMemo(() => {
    return {
      formData,
      setFormData,
    };
  }, [formData]);
  console.log(formData);

  return (
    <div className={cx.wrapper_filter}>
      <div className={cx.wrapper_content_filters}>
        <Heading tag="h3">фильтры</Heading>
        <FilterContext.Provider value={contextValue}>
          <form ref={formRef} onChange={onChangeForm}>
            <FilterPrice />
            <FilterSize />
            <FilterStructure />
            <FilterSeason />
            <FilterPattern />
            <FilterStyle />
            <FilterColor />
          </form>
        </FilterContext.Provider>
      </div>
    </div>
  );
};

export default SearchFilter;
