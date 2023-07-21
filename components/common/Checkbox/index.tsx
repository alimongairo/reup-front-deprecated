import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import Text from '@/components/common/Text';

import cx from './index.module.scss';

export interface ICheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
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
  subGroupName?: string;
  direction?: 'horizontal' | 'vertical';
  // onChangeGroup?: (newValue: Record<string, boolean>, groupName?: string) => void;
  onChangeGroup?: (
    newValue: Record<string, any>,
    groupName?: string,
    subGroupName?: string,
  ) => void;
}

export const CheckboxGroup = ({
  checkboxList,
  groupName,
  subGroupName,
  direction = 'horizontal',
  onChangeGroup,
}: ICheckboxGroupProps) => {
  const onChange = (
    value: string,
    checked: boolean,
    groupName?: string,
    subGroupName?: string,
  ) => {
    if (groupName && subGroupName && onChangeGroup) {
      // console.log(groupName)
      onChangeGroup(
        { [groupName]: { [subGroupName]: { [value]: checked } } },
        groupName,
        subGroupName,
      );
    } else {
      if (value && !Array.isArray(value) && onChangeGroup) {
        onChangeGroup({ [value]: checked });
      }
    }
  };

  return (
    <div className={classNames(cx.checkboxGroup, cx[direction])}>
      {checkboxList.map((checkbox, index) => (
        <Checkbox
          key={index}
          {...checkbox}
          name={groupName || checkbox.name}
          onChange={(e) => {
            onChange(
              checkbox.value as string,
              e.target.checked,
              groupName,
              subGroupName,
            );
            // console.log(checkbox.value);
          }}
        />
      ))}
    </div>
  );
};

export default Checkbox;
