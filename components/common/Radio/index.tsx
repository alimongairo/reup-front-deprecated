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
}

const Radio = ({ label, ...rest }: IRadioProps) => {
  const { id, value } = rest;
  return (
    <div className={cx.radio}>
      {label && (
        <label htmlFor={id || String(value)}>
          <Text>{label}</Text>
        </label>
      )}
      <input type="radio" id={id || String(value)} {...rest} />
    </div>
  );
};

export interface IRadioGroupProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  radioList: IRadioProps[];
  groupName?: string;
  direction?: 'horizontal' | 'vertical';
  onChangeGroup?: (newValue: IRadioProps['value']) => void;
}

export const RadioGroup = ({
  radioList,
  direction = 'horizontal',
  groupName,
  onChangeGroup,
}: IRadioGroupProps) => {
  const onChange = (value: IRadioProps['value']) => {
    if (onChangeGroup) {
      onChangeGroup(value);
    }
  };

  return (
    <div className={classNames(cx[direction], cx.wrapper)}>
      {radioList.map((radio, index) => (
        <Radio
          key={index}
          {...radio}
          name={groupName || radio.name}
          onChange={() => onChange(radio.value)}
        />
      ))}
    </div>
  );
};

export default Radio;
