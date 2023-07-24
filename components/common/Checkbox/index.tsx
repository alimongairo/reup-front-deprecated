import { DetailedHTMLProps, InputHTMLAttributes, useRef } from 'react';
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
    if (onChangeGroup && value && !Array.isArray(value)) {
      if (groupName && subGroupName) {
        if (value === 'all') {
          let res = [] as any;
          checkboxList.map((item: any) => {
            res.push(
              JSON.stringify({
                [subGroupName]: { [item.value]: checked },
              }),
            );
          });

          onChangeGroup(res, groupName, subGroupName);
        } else {
          const resultObjString = JSON.stringify({
            [subGroupName]: { [value]: checked },
          });

          onChangeGroup(JSON.parse(resultObjString), groupName, subGroupName);
        }
      } else {
        onChangeGroup({ [value]: checked });
      }
    }
  };

  return (
    <div className={classNames(cx.checkboxGroup, cx[direction])}>
      {checkboxList.map((checkbox, index) => (
        <Checkbox
          checked={checkbox.checked}
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
          }}
        />
      ))}
    </div>
  );
};

export default Checkbox;
