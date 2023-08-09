import classNames from 'classnames';
import cx from './index.module.scss';

import { ISelectOption } from '../Select';
import SelectedOption from './SelectedOption';
import { useCallback } from 'react';

export interface Props {
  label?: string;
  options: ISelectOption[];
  onChange: any;
  value: string;
  multiple?: boolean;
}

const ListSelect = ({ label, options, onChange, value }: Props) => {
  const onSelect = useCallback(
    (newValue: ISelectOption) => onChange(newValue.value),
    [onChange],
  );
  const onDelete = useCallback(() => onChange(''), [onChange]);

  return (
    <div className={cx.wrapper}>
      <div className={cx.label}>{label}</div>

      <div className={cx.selectedOptions}>
        {options.map((el, i) => {
          const isActive = el?.value === value;
          const isDisabled = Boolean(value && el?.value !== value);
          return (
            <span
              key={i}
              onClick={
                isActive
                  ? () => onDelete()
                  : isDisabled
                  ? () => {}
                  : () => onSelect(el)
              }
            >
              <SelectedOption
                option={el}
                active={isActive}
                disabled={isDisabled}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ListSelect;
