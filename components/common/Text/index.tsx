import { ReactNode } from 'react';
import classNames from 'classnames';

import cx from './index.module.scss';

interface IProps {
  children: ReactNode;
  size?: 'bold' | 'normal';
}

const Text = ({ children, size = 'normal' }: IProps) => {
  return <p className={classNames(cx.text, cx[size])}>{children}</p>;
};

export default Text;
