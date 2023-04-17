import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';

import Heading from '@/components/common/Heading';

import {
  EColor,
  FilterContext,
} from '@/components/common/FiltersForProducts/context';

import cx from '@/components/common/FiltersForProducts/index.module.scss';

const Colors = () => {
  const { setFilterData } = useContext(FilterContext);
  const [activeColors, setActiveColors] = useState<EColor[]>([]);

  const onChange = (color: EColor) => {
    setActiveColors((state) => {
      if (state.includes(color)) {
        return state.filter((item) => item !== color);
      } else {
        return [...state, color];
      }
    });
  };

  useEffect(() => {
    if (setFilterData) {
      setFilterData({ colors: activeColors });
    }
  }, [activeColors]);

  return (
    <div className={cx.filterItem}>
      <Heading tag="h4" className={cx.subTitle} style={{ marginTop: '10px' }}>
        цвет
      </Heading>
      <div className={cx.colors}>
        <div
          className={classNames(cx.color, cx.white, {
            [cx.active]: activeColors.includes(EColor.White),
          })}
          onClick={() => onChange(EColor.White)}
        ></div>
        <div
          className={classNames(cx.color, cx.black, {
            [cx.active]: activeColors.includes(EColor.Black),
          })}
          onClick={() => onChange(EColor.Black)}
        ></div>
        <div
          className={classNames(cx.color, cx.blue, {
            [cx.active]: activeColors.includes(EColor.Blue),
          })}
          onClick={() => onChange(EColor.Blue)}
        ></div>
        <div
          className={classNames(cx.color, cx.green, {
            [cx.active]: activeColors.includes(EColor.Green),
          })}
          onClick={() => onChange(EColor.Green)}
        ></div>
      </div>
    </div>
  );
};

export default Colors;
