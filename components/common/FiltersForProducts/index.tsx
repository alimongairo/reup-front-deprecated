import { useEffect, useMemo, useRef, useState } from 'react';

import Heading from '@/components/common/Heading';
import Price from '@/components/common/FiltersForProducts/Price';
import Divider from '@/components/common/Divider';
import Sizes from '@/components/common/FiltersForProducts/Sizes';
import Compounds from '@/components/common/FiltersForProducts/Compounds';
import Seasons from '@/components/common/FiltersForProducts/Seasons';
import Patterns from '@/components/common/FiltersForProducts/Patterns';
import Style from '@/components/common/FiltersForProducts/Style';
import Colors from '@/components/common/FiltersForProducts/Colors';

import {
  FilterContext,
  TFilterData,
} from '@/components/common/FiltersForProducts/context';

import cx from './index.module.scss';

interface IProps {
  onChange?: (data: TFilterData) => void;
}

const FiltersForProducts = ({ onChange }: IProps) => {
  const formRef = useRef<any>();
  const [formData, setFormData] = useState<TFilterData>({});

  const onChangeForm = () => {
    if (formRef.current) {
      const data = new FormData(formRef.current);
      setFormData((state) => ({ ...state, ...Object.fromEntries([...data]) }));
    }
  };

  const setFilterData = (data: TFilterData) => {
    setFormData((state) => ({ ...state, ...data }));
  };

  const contextValue = useMemo(() => {
    return {
      ...formData,
      setFilterData,
    };
  }, [formData]);

  useEffect(() => {
    if (onChange) {
      onChange(formData);
    }
  }, [formData]);

  return (
    <FilterContext.Provider value={contextValue}>
      <form onChange={onChangeForm} ref={formRef} className={cx.form}>
        <Heading className={cx.heading} tag="h3">
          фильтры
        </Heading>
        <Price />
        <Sizes />

        <Divider direction={'horizontal'} />
        <Compounds />

        <Divider direction={'horizontal'} />
        <Seasons />

        <Divider direction={'horizontal'} />
        <Patterns />

        <Divider direction={'horizontal'} />
        <Style />

        <Divider direction={'horizontal'} />
        <Colors />
      </form>
    </FilterContext.Provider>
  );
};

export default FiltersForProducts;