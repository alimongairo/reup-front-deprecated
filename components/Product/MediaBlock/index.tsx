import { Dispatch, SetStateAction, useCallback } from 'react';
import cx from './index.module.scss';

import Heading from '../../common/Heading';

import { Product } from '..';
import ImageUpload from '../../common/ImageUpload';

interface Props {
  state: Product;
  setState: Dispatch<SetStateAction<Product>>;
}

const MediaBlock = ({ state, setState }: Props) => {
  const handleChangeMain = useCallback(
    () => (value: any) =>
      setState({ ...state, media: { ...state.media, main: value } }),
    [setState, state],
  );

  const handleChange = useCallback(
    (i: number) => (value: string) => {
      const newState = { ...state };
      newState.media.other[i] = value;
      setState(newState);
    },
    [setState, state],
  );

  return (
    <div className={cx.container}>
      <Heading tag="h2">мультимедиа</Heading>
      <div className={cx.content}>
        <div className={cx.mainImage}>
          <ImageUpload
            main
            value={state.media.main}
            onChange={handleChangeMain()}
          />
        </div>
        <div className={cx.images}>
          {state.media.other.map((el, i) => (
            <ImageUpload key={i} value={el} onChange={handleChange(i)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaBlock;
