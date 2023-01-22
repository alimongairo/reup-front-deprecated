import { useState, memo } from 'react';
import classNames from 'classnames';

import cx from './index.module.scss';

export interface ISelectOption {
  id: number;
  label: string;
  value: number;
}

export interface ISelect {
  title: string;
  options: ISelectOption[];
  onSelect?: (value: ISelectOption['value'] | undefined) => void;
  initValue?: ISelectOption['value'];
}

const Select = ({ title, initValue, options, onSelect }: ISelect) => {
  const [value, setValue] = useState(initValue);
  const [ddVisible, setDdVisible] = useState(false);

  const onMouseEnter = () => {
    setDdVisible(true);
  };

  const onSelectValue = (selectedValue: ISelectOption['value']) => {
    const newValue =
      value && selectedValue === value ? undefined : selectedValue;

    if (onSelect) {
      onSelect(newValue);
    }
    setValue(newValue);
  };

  return (
    <div
      className={cx.wrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setDdVisible(false)}
    >
      <div className={cx.title}>{value ? value : title}</div>
      <div className={classNames(cx.dd, ddVisible && cx.ddVisible)}>
        {options.map((option) => {
          return (
            <div
              className={classNames(
                cx.option,
                value === option.value && cx.selected,
              )}
              key={option.id}
              onClick={() => onSelectValue(option.value)}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Select);
