import { useState, memo } from 'react';
import classNames from 'classnames';
import cx from './index.module.scss';

import Image from 'next/image';

import downArrow from '@/static/icons/downArrowSmall.svg';
import upArrow from '@/static/icons/upArrowSmall.svg';

export interface ISelectOption {
  label: string;
  value: string;
}

export interface ISelect {
  label?: string;
  options: ISelectOption[];
  onChange: any;
  value: string | number;
}

const Select = ({ label, options, onChange, value }: ISelect) => {
  const [open, setOpen] = useState(false);

  const onSelect = (newValue: ISelectOption) => {
    onChange(newValue.value);
  };

  return (
    <div
      className={cx.wrapper}
      onClick={() => setOpen(!open)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={cx.content}>
        {value ? (
          <div>{options.find((el) => el.value === value)?.label}</div>
        ) : (
          <div className={cx.label}>{label}</div>
        )}
        <Image src={open ? downArrow : upArrow} alt="arrow" />
      </div>
      <div className={classNames(cx.dropdown, open && cx.visible)}>
        {options.map((option, i) => {
          return (
            <div
              className={classNames(
                cx.option,
                value === option.value && cx.selected,
              )}
              key={i}
              onClick={() => onSelect(option)}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
