import { ReactNode } from 'react';

import cx from './index.module.scss';
import classNames from 'classnames';

interface IProps {
  children: ReactNode;
  size?: 'bold' | 'normal';
}

const Text = ({ children, size = 'normal' }: IProps) => {
  return <p className={classNames(cx.text, cx[size])}>{children}</p>;
};

export default Text;
