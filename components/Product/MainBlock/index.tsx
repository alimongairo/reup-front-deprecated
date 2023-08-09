import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import cx from './index.module.scss';

import Heading from '../../common/Heading';
import Select from '../../common/Select';
import TextField from '../../common/TextField';

import { Product } from '..';

const options = [
  { label: 'option 1', value: '1' },
  { label: 'option 2', value: '2' },
];

interface Props {
  state: Product;
  setState: Dispatch<SetStateAction<Product>>;
}

const MainBlock = ({ state, setState }: Props) => {
  const handleChange = useCallback(
    (name: string) => {
      return (value: string) => setState({ ...state, [name]: value });
    },
    [setState, state],
  );

  return (
    <div className={cx.container}>
      <Heading tag="h2">главная</Heading>
      <div className={cx.content}>
        <div className={cx.selectBlock}>
          <Select
            options={options}
            label="категория"
            value={state.category}
            onChange={handleChange('category')}
          />
          <Select
            options={options}
            label="подкатегория"
            value={state.subcategory}
            onChange={handleChange('subcategory')}
          />
          <Select
            options={options}
            label="под-подкатегория"
            value={state.subsubcategory}
            onChange={handleChange('subsubcategory')}
          />
        </div>
        <div className={cx.inputBlock}>
          <TextField
            label="название товара"
            value={state.name}
            onChange={handleChange('name')}
            limit={60}
          />
          <div className={cx.textarea}>
            <TextField
              label="описание товара"
              value={state.description}
              onChange={handleChange('description')}
              multiline
              limit={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
