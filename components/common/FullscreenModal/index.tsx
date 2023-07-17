import { ReactNode, useEffect } from 'react';
import Image from 'next/image';

import Portal from '@/hoc/Portal';
import Footer from '@/layouts/MainLayout/Footer';
import back from '@/static/icons/back.svg';
import Heading from '@/components/common/Heading';

import cx from './index.module.scss';

interface IProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const FullscreenModal = ({ visible, onClose, children, title }: IProps) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  }, [visible]);

  return (
    <Portal visible={visible}>
      <div className={cx.modal}>
        <div className={cx.wrapper}>
          <div className={cx.head}>
            <Image
              src={back}
              alt={'back'}
              className={cx.closeBtn}
              onClick={onClose}
            />
            <Heading className={cx.title} tag="h3">
              {title}
            </Heading>
          </div>
          <div className={cx.content}>{children}</div>
        </div>
      </div>
      <Footer className={cx.footer} />
    </Portal>
  );
};

export default FullscreenModal;
