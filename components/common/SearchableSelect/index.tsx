import { useState, memo } from 'react';
import classNames from 'classnames';
import cx from './index.module.scss';

import Image from 'next/image';
import SelectedOption from './SelectedOption';

import search from '@/static/icons/search.svg';
import { ISelectOption } from '../Select';

export interface ISelect {
  label?: string;
  placeholder?: string;
  options: ISelectOption[];
  onChange: any;
  value: string | string[];
  multiple?: boolean;
}

const SearchableSelect = ({
  label,
  placeholder,
  options,
  onChange,
  value,
  multiple,
}: ISelect) => {
  const [open, setOpen] = useState(false);

  const onMultipleSelect = (newValue: ISelectOption) => {
    onChange([...value, newValue.value]);
  };

  const onSelect = (newValue: ISelectOption) => {
    onChange(newValue.value);
  };

  return (
    <div className={cx.wrapper}>
      <div className={cx.label}>{label}</div>

      <div
        className={classNames(
          cx.container,
          !multiple && value.length > 0 ? cx.disabled : '',
        )}
        onClick={() => setOpen(!open)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className={cx.content}>
          <div className={cx.placeholder}>{placeholder}</div>
          <Image
            src={search}
            alt="search"
            style={{ width: '24px', height: '24px', marginTop: '-3px' }}
          />
        </div>
        <div className={classNames(cx.dropdown, open && cx.visible)}>
          {options
            .filter((el) => !value.includes(el.value))
            .map((option, i) => {
              return (
                <div
                  className={cx.option}
                  key={i}
                  onClick={() =>
                    multiple ? onMultipleSelect(option) : onSelect(option)
                  }
                >
                  {option.label}
                </div>
              );
            })}
        </div>
      </div>

      {Boolean(value.length) && (
        <div className={cx.selectedOptions}>
          {Array.isArray(value) ? (
            value.map((el, i) => (
              <SelectedOption
                key={i}
                option={options.find((option) => option.value == el)}
                value={value}
                onChange={onChange}
              />
            ))
          ) : (
            <SelectedOption
              option={options.find((option) => option.value == value)}
              value={value}
              onChange={onChange}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;
