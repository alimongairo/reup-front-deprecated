import React, { useContext, useEffect, useMemo, useState } from 'react';
import cx from '@/components/common/FiltersForProducts/index.module.scss';
import Text from '@/components/common/Text';
import { IRadioProps, RadioGroup } from '@/components/common/Radio';
import Button from '@/components/common/Button';
import {
  ESize,
  FilterContext,
} from '@/components/common/FiltersForProducts/context';

const radioList: IRadioProps[] = [
  {
    label: 'ru',
    value: 'ru',
  },
  {
    label: 'int',
    value: 'int',
  },
];

const Sizes = () => {
  const { setFilterData } = useContext(FilterContext);
  const [sizes, setSizes] = useState<ESize[]>([]);

  const onSetSize = (
    size: ESize,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setSizes((state) => {
      if (state.includes(size)) {
        return state.filter((item) => item !== size);
      }
      return [...state, size];
    });
  };

  useEffect(() => {
    if (setFilterData) {
      setFilterData({ sizes });
    }
  }, [sizes]);

  return (
    <div className={cx.filterItem}>
      <Text className={cx.subTitle}>размер</Text>
      <RadioGroup radioList={radioList} groupName={'sizeType'} />
      <div className={cx.sizeGrid}>
        <Button
          size={'small'}
          onClick={(event) => onSetSize(ESize.S, event)}
          active={sizes.includes(ESize.S)}
        >
          {ESize.S}
        </Button>
        <Button
          size={'small'}
          onClick={(event) => onSetSize(ESize.M, event)}
          active={sizes.includes(ESize.M)}
        >
          {ESize.M}
        </Button>
        <Button
          size={'small'}
          onClick={(event) => onSetSize(ESize.L, event)}
          active={sizes.includes(ESize.L)}
        >
          {ESize.L}
        </Button>
        <Button
          size={'small'}
          onClick={(event) => onSetSize(ESize.XL, event)}
          active={sizes.includes(ESize.XL)}
        >
          {ESize.XL}
        </Button>
        <Button
          size={'small'}
          onClick={(event) => onSetSize(ESize.S, event)}
          active={sizes.includes(ESize.S)}
        >
          {ESize.S}
        </Button>
        <Button
          size={'small'}
          onClick={(event) => onSetSize(ESize.M, event)}
          active={sizes.includes(ESize.M)}
        >
          {ESize.M}
        </Button>
        <Button
          size={'small'}
          onClick={(event) => onSetSize(ESize.L, event)}
          active={sizes.includes(ESize.L)}
        >
          {ESize.L}
        </Button>
        <Button
          size={'small'}
          onClick={(event) => onSetSize(ESize.XL, event)}
          active={sizes.includes(ESize.XL)}
        >
          {ESize.XL}
        </Button>
      </div>
    </div>
  );
};

export default Sizes;
