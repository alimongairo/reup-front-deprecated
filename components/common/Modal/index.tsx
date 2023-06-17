import { ReactNode, useEffect } from 'react';
import { useWindowSize } from '@/hooks/useWindow';
import classNames from 'classnames';
import Image from 'next/image';

import Portal from '@/hoc/Portal';

import close from 'static/icons/close.svg';
import leftArrowMobile from 'static/icons/ArrowLeftMobile.svg';

import cx from './index.module.scss';

interface IProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ visible, onClose, children }: IProps) => {
  const windowSize = useWindowSize();

  if (windowSize.width == undefined) {
    windowSize.width = 390;
  }

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  }, [visible, windowSize.width]);

  return (
    <Portal visible={visible}>
      <div className={cx.backModal}>
        <div className={classNames(cx.wrapper)}>
          <span className={cx.closeBtn} onClick={onClose}>
            {windowSize.width <= 586 ? (
              <Image src={leftArrowMobile} alt={'leftArrowMobile'} />
            ) : (
              <Image src={close} alt={'close'} />
            )}
          </span>
          <div className={cx.content}>{children}</div>
        </div>
        <span className={cx.closeMask} onClick={onClose}></span>
      </div>
    </Portal>
  );
};

export default Modal;
