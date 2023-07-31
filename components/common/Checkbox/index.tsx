import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import Text from '@/components/common/Text';

import cx from './index.module.scss';

export interface ICheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string | ReactNode;
  labelPlacement?: 'left' | 'right' | 'top';
  htmlFor?: string;
}

const Checkbox = ({
  label,
  labelPlacement = 'top',
  htmlFor,
  id,
  ...props
}: ICheckboxProps) => {
  return (
    <div className={classNames(cx.wrapper, cx[labelPlacement])}>
      {label && (
        <Text size={'thin'}>
          <label htmlFor={htmlFor ? htmlFor : id}>{label}</label>
        </Text>
      )}
      <div className={cx.inputWrapper}>
        <input className={cx.input} type="checkbox" {...props} id={id} />
      </div>
    </div>
  );
};

interface ICheckboxGroupProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  checkboxList: ICheckboxProps[];
  groupName?: string;
  direction?: 'horizontal' | 'vertical';
  onChangeGroup?: (newValue: Record<string, boolean>) => void;
}

export const CheckboxGroup = ({
  checkboxList,
  groupName,
  direction = 'horizontal',
  onChangeGroup,
}: ICheckboxGroupProps) => {
  const onChange = (value: string, checked: boolean) => {
    if (value && !Array.isArray(value) && onChangeGroup) {
      onChangeGroup({ [value]: checked });
    }
  };

  return (
    <div className={classNames(cx.checkboxGroup, cx[direction])}>
      {checkboxList.map((checkbox, index) => (
        <Checkbox
          key={index}
          {...checkbox}
          name={groupName || checkbox.name}
          onChange={(e) => onChange(checkbox.value as string, e.target.checked)}
        />
      ))}
    </div>
  );
};

export default Checkbox;
