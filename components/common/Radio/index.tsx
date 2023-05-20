import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import Text from '@/components/common/Text';

import cx from './index.module.scss';

export interface IRadioProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: ReactNode;
  labelPlacement?: 'left' | 'right';
}

const Radio = ({ label, labelPlacement = 'right', ...rest }: IRadioProps) => {
  const { id, value } = rest;

  return (
    <div className={classNames(cx.radio, cx[labelPlacement])}>
      {label && (
        <label htmlFor={id || String(value)}>
          <Text>{label}</Text>
        </label>
      )}
      <input
        className={cx.radioInput}
        type="radio"
        id={id || String(value)}
        value={value}
        {...rest}
      />
    </div>
  );
};

export interface IRadioGroupProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  radioList: IRadioProps[];
  value?: string | number;
  groupName?: string;
  direction?: 'horizontal' | 'vertical';
  onChangeGroup?: (newValue: IRadioProps['value']) => void;
}

export const RadioGroup = ({
  radioList,
  direction = 'horizontal',
  groupName,
  value,
  onChangeGroup,
}: IRadioGroupProps) => {
  const onChange = (value: IRadioProps['value']) => {
    if (onChangeGroup) {
      onChangeGroup(value);
    }
  };
  return (
    <div className={classNames(cx[direction], cx.wrapper)}>
      {radioList.map((radio, index) => {
        return (
          <Radio
            key={index}
            {...radio}
            value={radio.value}
            checked={radio.value === value}
            onChange={() => onChange(radio.value)}
          />
        );
      })}
    </div>
  );
};

export default Radio;
