import {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLInputTypeAttribute,
} from 'react';
import classNames from 'classnames';

import cx from './index.module.scss';

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: HTMLInputTypeAttribute;
}

const Input = ({ className, ...props }: IProps) => {
  return <input className={classNames(className, cx.input)} {...props} />;
};

export default Input;
