import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import cx from './index.module.scss';

import { Product, SizeType } from '..';

import Heading from '../../common/Heading';
import Switcher from '../../common/Switcher';
import SizeSelectSingle from './SizeSelectSingle';
import SizeSelectRange from './SizeSelectRange';

interface Props {
  state: Product;
  setState: Dispatch<SetStateAction<Product>>;
}

const sizes = ['36', '38', '42', '44', '46'];

const SizeBlock = ({ state, setState }: Props) => {
  const handleChange = useCallback(
    (name: string) => {
      return (value: string) => setState({ ...state, [name]: value });
    },
    [setState, state],
  );

  useEffect(() => {
    state.sizeType === SizeType.single
      ? setState({ ...state, sizes: [''] })
      : setState({ ...state, sizes: [['', '']] });
  }, [setState, state.sizeType]);

  return (
    <div className={cx.container}>
      <Heading tag="h2">размеры</Heading>
      <div className={cx.content}>
        <div className={cx.switcherBox}>
          <Switcher
            value={state.sizeCountry}
            onChange={handleChange('sizeCountry')}
            leftOption={{ label: 'int', value: 'int' }}
            rightOption={{ label: 'ru', value: 'ru' }}
          />
          {state.sizeCountry && (
            <Switcher
              value={state.sizeType}
              onChange={handleChange('sizeType')}
              leftOption={{ label: 'размер', value: SizeType.single }}
              rightOption={{
                label: 'диапозон размеров',
                value: SizeType.range,
              }}
            />
          )}
        </div>
        <div className={cx.sizesBox}>
          {state.sizeType === SizeType.single && (
            <SizeSelectSingle
              value={state.sizes as string[]}
              onChange={handleChange('sizes')}
              sizes={sizes}
            />
          )}
          {state.sizeType === SizeType.range && (
            <SizeSelectRange
              value={state.sizes as string[][]}
              onChange={handleChange('sizes')}
              sizes={sizes}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SizeBlock;
