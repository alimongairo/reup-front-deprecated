import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

import cx from './index.module.scss';

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ children, className, ...props }: IProps) => {
  return (
    <button className={classNames(className, cx.btn)} {...props}>
      {children}
    </button>
  );
};

export default Button;
