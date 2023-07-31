import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';

import classNames from 'classnames';

import Heading from '@/components/common/Heading';
import Categories from '@/components/common/FiltersForProducts/Categories';
import Price from '@/components/common/FiltersForProducts/Price';
import Divider from '@/components/common/Divider';
import Sizes from '@/components/common/FiltersForProducts/Sizes';
import Brands from '@/components/common/FiltersForProducts/Brands';
import Compounds from '@/components/common/FiltersForProducts/Compounds';
import Seasons from '@/components/common/FiltersForProducts/Seasons';
import Patterns from '@/components/common/FiltersForProducts/Patterns';
import Style from '@/components/common/FiltersForProducts/Style';
import Colors from '@/components/common/FiltersForProducts/Colors';
import Button from '@/components/common/Button';

import {
  FilterContext,
  TFilterData,
} from '@/components/common/FiltersForProducts/context';

import cx from './index.module.scss';

interface IProps {
  onChange?: (data: TFilterData) => void;
  isInModal?: boolean;
  onModalClose?: () => void;
  className?: string;
}

const FiltersForProducts = ({
  onChange,
  isInModal,
  onModalClose,
  className,
}: IProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<TFilterData>({});

  const onChangeForm = () => {
    if (formRef.current) {
      const data = new FormData(formRef.current);
      setFormData((state) => ({ ...state, ...Object.fromEntries([...data]) }));
    }
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(formData);
    onModalClose && onModalClose();
  }

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
    if (onChange && !isInModal) {
      onChange(formData);
    }
  }, [formData]);

  return (
    <FilterContext.Provider value={contextValue}>
      <form
        onChange={onChangeForm}
        ref={formRef}
        className={classNames(className, cx.form)}
      >
        {!isInModal && (
          <Heading className={cx.heading} tag="h3">
            фильтры
          </Heading>
        )}

        <Categories />

        <Price />
        <Sizes />
        <Brands />

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

        {isInModal && (
          <div>
            <Button className={cx.submitBtn} onClick={handleSubmit}>
              применить
            </Button>
          </div>
        )}
      </form>
    </FilterContext.Provider>
  );
};

export default FiltersForProducts;
