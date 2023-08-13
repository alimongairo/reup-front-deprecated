import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import cx from './index.module.scss';
import { Product } from '..';

import Heading from '../../common/Heading';
import SearchableSelect from '../../common/SearchableSelect';
import ListSelect from '../../common/ListSelect';

const options = [
  { label: 'option 1', value: '1' },
  { label: 'option 2', value: '2' },
  { label: 'option 3', value: '3' },
  { label: 'option 4', value: '4' },
  { label: 'option 5', value: '5' },
];

interface Props {
  state: Product;
  setState: Dispatch<SetStateAction<Product>>;
}

const DetailsBlock = ({ state, setState }: Props) => {
  const handleChange = useCallback(
    (name: string) => {
      return (value: string) => setState({ ...state, [name]: value });
    },
    [setState, state],
  );

  return (
    <div className={cx.container}>
      <Heading tag="h2">о товаре</Heading>
      <div className={cx.content}>
        <div className={cx.selectBlock}>
          <SearchableSelect
            label="материал"
            placeholder="состав"
            value={state.fabric}
            onChange={handleChange('fabric')}
            options={options}
            multiple
          />
          <SearchableSelect
            label="цвет"
            placeholder="цвет"
            value={state.color}
            onChange={handleChange('color')}
            options={options}
          />
        </div>
        <div className={cx.selectBlock}>
          <SearchableSelect
            label="узор"
            placeholder="узор"
            value={state.pattern}
            onChange={handleChange('pattern')}
            options={options}
          />
          <SearchableSelect
            label="стиль"
            placeholder="стиль"
            value={state.style}
            onChange={handleChange('style')}
            options={options}
          />
        </div>
        <div className={cx.selectBlock}>
          <ListSelect
            label="сезон"
            value={state.season}
            onChange={handleChange('season')}
            options={options}
          />
          <ListSelect
            label="пол"
            value={state.gender}
            onChange={handleChange('gender')}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsBlock;
