import { ReactNode, useEffect, useRef, useState } from 'react';

import Text from 'components/common/Text';
import Heading from '@/components/common/Heading';

import leftArrow from 'static/icons/leftArrow.svg';
import cx from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

const Item = (props: any) => {
  const { children } = props;

  return (
    <div className={cx.wrapper}>
      <div className={cx.collapseIcon} onClick={props.toggleOpen}>
        <Image
          src={leftArrow}
          alt={'leftArrow'}
          className={classNames(
            cx.icon,
            { [cx.rotate__180]: props.isClose },
            { [cx.rotate]: !props.isClose },
          )}
        />
      </div>
      <Heading tag="h4" className={cx.title} onClick={props.toggleOpen}>
        {props.title}
      </Heading>
      <div className={cx.content} ref={props.contentRef}></div>
      {children}
    </div>
  );
};

const CollapseCascade = (props: any) => {
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
        const minHeight = '0px';
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
    <Item {...props}>
      {props.content.map((item: any) =>
        item.list.map((item: any) =>
          item.list ? (
            item.list.map((item: any) => (
              <Item {...props} key="ttt">
                <div>{item.label}</div>
              </Item>
            ))
          ) : (
            <div key="ttt">{item.label}</div>
          ),
        ),
      )}
    </Item>
  );
};

export default CollapseCascade;
