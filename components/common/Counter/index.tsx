import { useState } from 'react';

import Button from '@/components/common/Button';

import cx from './index.module.scss';

interface IProps {
  value: number;
  onChange: (value: number) => void;
}

const MIN_INPUT_SIZE = 2 as const;

const Counter = ({ value, onChange }: IProps) => {
  const [inputSize, setInputSize] = useState(MIN_INPUT_SIZE);
  const onInc = () => {
    if (value !== 0) {
      onChange(value - 1);
    }
  };

  const onDec = () => {
    onChange(value + 1);
  };

  const onChangeInput = (value: string) => {
    let result = '';
    for (let i of value) {
      if (!Number.isNaN(Number(i))) {
        result += i;
      }
    }
    onChange(Number(result));
  };

  const onKeyDown = (e: any) => {
    if (e.nativeEvent.target.value.length > MIN_INPUT_SIZE) {
      setInputSize(e.nativeEvent.target.value.length);
    } else {
      setInputSize(MIN_INPUT_SIZE);
    }
  };

  return (
    <div className={cx.wrapper}>
      <Button
        className={cx.btn}
        size={'small'}
        onClick={onInc}
        disable={value === 0}
      >
        -
      </Button>
      <input
        className={cx.input}
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
        size={inputSize}
        onKeyDown={onKeyDown}
      />
      <Button className={cx.btn} size={'small'} onClick={onDec}>
        +
      </Button>
    </div>
  );
};

export default Counter;
