import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import cx from './index.module.scss';

import Heading from '../../common/Heading';
import Select from '../../common/Select';

import { Product } from '..';

const options = [
  { label: 'option 1', value: '1' },
  { label: 'option 2', value: '2' },
];

interface Props {
  state: Product;
  setState: Dispatch<SetStateAction<Product>>;
}

const DeliveryBlock = ({ state, setState }: Props) => {
  const handleChange = useCallback(
    (name: string) => {
      return (value: string) => setState({ ...state, [name]: value });
    },
    [setState, state],
  );

  return (
    <div className={cx.container}>
      <Heading tag="h2">выбор пвз</Heading>
      <div className={cx.content}>
        <div style={{ width: '550px' }}>
          <Select
            label="пункт выдачи"
            options={options}
            value={state.poi}
            onChange={handleChange('poi')}
          />
        </div>
        <div style={{ width: '180px' }}>
          <Select
            label="вес товара"
            options={options}
            value={state.weight}
            onChange={handleChange('weight')}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryBlock;
