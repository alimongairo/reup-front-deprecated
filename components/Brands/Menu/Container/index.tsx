import { ReactNode } from 'react';

import Text from '@/components/common/Text';

import { Arrow } from '@/static/icons/Arrow';
import cx from './index.module.scss';

interface IProps {
  onBack?: () => void;
  title: string;
  children: ReactNode;
}

const Container = ({ onBack, title, children }: IProps) => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.header}>
        <div className={cx.back} onClick={() => onBack && onBack()}>
          {onBack && <Arrow color="black" />}
        </div>
        <Text className={cx.title}>{title}</Text>
      </div>
      <div className={cx.content}>{children}</div>
    </div>
  );
};

export default Container;
