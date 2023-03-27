import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import Text from '@/components/common/Text';

import cx from './index.module.scss';

interface IProps
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
}: IProps) => {
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

export default Checkbox;
