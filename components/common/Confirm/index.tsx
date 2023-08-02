import { ReactNode, useEffect } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import Portal from '@/hoc/Portal';

import close from 'static/icons/close.svg';

import cx from './index.module.scss';
import Button from '../Button';

interface IProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children: ReactNode;
}

const Confirm = ({ visible, onClose, onSubmit, children }: IProps) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  }, [visible]);

  return (
    <Portal visible={visible}>
      <div className={cx.backModal}>
        <div className={classNames(cx.wrapper)}>
          <span className={cx.closeBtn} onClick={onClose}>
            <Image src={close} alt={'close'} />
          </span>
          <div className={cx.content}>
            {children}
            <div className={cx.btns}>
              <Button onClick={onSubmit}>да</Button>
              <Button onClick={onClose}>отмена</Button>
            </div>
          </div>
        </div>
        <span className={cx.closeMask} onClick={onClose}></span>
      </div>
    </Portal>
  );
};

export default Confirm;
