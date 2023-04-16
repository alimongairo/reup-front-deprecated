import classNames from 'classnames';

import cx from './index.module.scss';

interface IProps {
  direction: 'vertical' | 'horizontal';
}

const Divider = ({ direction = 'vertical' }: IProps) => {
  return <div className={classNames(cx.divider, cx[direction])}></div>;
};

export default Divider;
