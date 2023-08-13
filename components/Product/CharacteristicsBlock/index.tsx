import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import cx from './index.module.scss';

import Heading from '../../common/Heading';
import TextField from '../../common/TextField';

import { Product } from '..';

interface Props {
  state: Product;
  setState: Dispatch<SetStateAction<Product>>;
}

const CharacteristicsBlock = ({ state, setState }: Props) => {
  const handleChange = useCallback(
    (name: string) => {
      return (value: string) =>
        setState({
          ...state,
          characterictics: { ...state.characterictics, [name]: value },
        });
    },
    [setState, state],
  );

  return (
    <div className={cx.container}>
      <Heading tag="h2">характеристики</Heading>
      <div className={cx.content}>
        <TextField
          label="описание товара"
          value={state.characterictics.text}
          onChange={handleChange('text')}
          multiline
        />
      </div>
    </div>
  );
};

export default CharacteristicsBlock;
