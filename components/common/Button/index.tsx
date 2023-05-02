import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

import cx from './index.module.scss';

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disable?: boolean;
  size?: 'small' | 'normal';
  active?: boolean;
  type?: 'submit';
}

const Button = ({
  children,
  className,
  disable,
  size = 'normal',
  active,
  type,
  ...props
}: IProps) => {
  return (
    <button
      className={classNames(className, cx.btn, cx[size], 'pointer', {
        [cx.disable]: disable,
        [cx.active]: active,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
