import Image from 'next/image';
import { ReactNode } from 'react';

import Heading from '@/components/common/Heading';

import cx from './index.module.scss';

import close from '@/static/icons/close.svg';
import back from '@/static/icons/back.svg';
import classNames from 'classnames';

interface IProps {
  title: string;
  onBack?: () => void;
  onClose?: () => void;
  children: ReactNode;
  width?: string;
}

const Frame = ({ title, children, onBack, onClose, width }: IProps) => {
  return (
    <div className={cx.wrapper} style={{ width }}>
      <div className={cx.bthHeader}>
        <div onClick={onBack} className={classNames({ [cx.hide]: !onBack })}>
          <Image src={back} alt="back" />
        </div>
        <div onClick={onClose} className={cx.close}>
          <Image src={close} alt="close" />
        </div>
      </div>
      <div className={cx.header}>
        <Heading tag="h2">{title}</Heading>
      </div>
      <div className={cx.content}>{children}</div>
    </div>
  );
};

export default Frame;
