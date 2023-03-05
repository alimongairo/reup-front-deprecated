import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import cx from './index.module.scss';

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: 'thin' | 'normal' | 'big';
  decoration?: 'line';
}

const Text = ({
  children,
  size = 'normal',
  decoration,
  className,
  ...props
}: IProps) => {
  return (
    <p
      className={classNames(cx.text, cx[size], cx[decoration || ''], className)}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
