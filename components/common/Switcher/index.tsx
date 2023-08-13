import { useCallback } from 'react';
import { ISelectOption } from '../Select';
import cx from './index.module.scss';
import classNames from 'classnames';

interface Props {
  value: string;
  onChange: any;
  leftOption: ISelectOption;
  rightOption: ISelectOption;
}

const Switcher = ({ value, onChange, leftOption, rightOption }: Props) => {
  const handleClick = useCallback(
    (newValue: string) => onChange(newValue),
    [onChange],
  );

  return (
    <div className={cx.container}>
      <span
        className={classNames(
          cx.switch,
          cx.leftSwitch,
          value === leftOption.value ? cx.active : '',
        )}
        onClick={() => handleClick(leftOption.value)}
      >
        {leftOption.label}
      </span>
      <span
        className={classNames(
          cx.switch,
          cx.rightSwitch,
          value === rightOption.value ? cx.active : '',
        )}
        onClick={() => handleClick(rightOption.value)}
      >
        {rightOption.label}
      </span>
    </div>
  );
};

export default Switcher;
