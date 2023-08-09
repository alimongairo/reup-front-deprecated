import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import cx from './index.module.scss';

import Heading from '../../common/Heading';

import { Product } from '..';

interface Props {
  state: Product;
  setState: Dispatch<SetStateAction<Product>>;
}

const MediaBlock = ({ state, setState }: Props) => {
  const handleChange = useCallback(
    (name: string) => {
      return (value: string) => setState({ ...state, [name]: value });
    },
    [setState, state],
  );

  return (
    <div className={cx.container}>
      <Heading tag="h2">мультимедиа</Heading>
      <div className={cx.content}></div>
    </div>
  );
};

export default MediaBlock;
