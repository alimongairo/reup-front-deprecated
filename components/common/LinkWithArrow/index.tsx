import { ReactNode } from 'react';

import { Arrow } from '@/static/icons/Arrow';

import cx from './index.module.scss';
import classes from 'classnames';

interface IProps {
  onClick?: () => void;
  text: ReactNode;
  color?: 'white' | 'black';
  classNames?: any;
}

const LinkWithArrow = ({
  onClick,
  text,
  color = 'white',
  classNames,
}: IProps) => {
  return (
    <div
      className={classes(cx.linkWithArrow, cx[color], classNames)}
      onClick={onClick}
    >
      {text}
      <Arrow color={color} />
    </div>
  );
};

export default LinkWithArrow;
