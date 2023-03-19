import { ReactNode, useEffect, useRef, useState } from 'react';

import Text from 'components/common/Text';
import Heading from '@/components/common/Heading';

import minuse from 'static/icons/minuse.svg';
import cx from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

interface IProps {
  title: string;
  content: ReactNode;
  hideCollapseIcon?: boolean;
  moreText?: string;
  lessText?: string;
}

const Collapse = ({
  title,
  content,
  moreText,
  lessText,
  hideCollapseIcon,
}: IProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClose, setIsClose] = useState(true);
  const [heightContent, setHeightContent] = useState(0);

  const toggleOpen = () => {
    setIsClose((state) => !state);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isClose) {
        const height = contentRef.current.getBoundingClientRect().height;
        const minHeight = moreText || lessText ? '32px' : '0px';
        if (height !== 0) {
          setHeightContent(height);
        }
        contentRef.current.style.height = minHeight;
        return;
      }
      contentRef.current.style.height = `${heightContent}px`;
    }
  }, [isClose]);

  return (
    <div className={cx.wrapper}>
      {!hideCollapseIcon && (
        <div className={cx.collapseIcon} onClick={toggleOpen}>
          <Image src={minuse} alt={'minuse'} className={cx.minus} />
          <Image
            src={minuse}
            alt={'minuse'}
            className={classNames(cx.minus, { [cx.rotate]: isClose })}
          />
        </div>
      )}
      <Heading tag="h4" className={cx.title} onClick={toggleOpen}>
        {title}
      </Heading>
      <div className={cx.content} ref={contentRef}>
        {content}
      </div>
      {moreText && (
        <div>
          <Text
            decoration="underline"
            className={cx.moreText}
            onClick={toggleOpen}
          >
            {isClose ? moreText : lessText || moreText}
          </Text>
        </div>
      )}
    </div>
  );
};

export default Collapse;
