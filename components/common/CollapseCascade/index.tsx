import { useEffect, useRef, useState } from 'react';
import { CheckboxGroup } from '@/components/common/Checkbox';
import Heading from '@/components/common/Heading';

import leftArrow from 'static/icons/leftArrow.svg';
import cx from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

// TODO: rewrite any

const Item = (props: any) => {
  const {
    children,
    title2,
    toggleOpen,
    isClose,
    contentRefProp,
    titleRefProp,
    onClick,
  } = props;

  return (
    <div className={cx.wrapper} onClick={onClick}>
      <div className={cx.titleWrapper} ref={titleRefProp} onClick={toggleOpen}>
        <Heading tag="h4" className={cx.title}>
          {title2}
        </Heading>
        <div className={cx.collapseIcon}>
          <Image
            src={leftArrow}
            alt={'leftArrow'}
            className={classNames(
              cx.icon,
              { [cx.rotate__180]: isClose },
              { [cx.rotate]: !isClose },
            )}
          />
        </div>
      </div>

      <div className={cx.content} ref={contentRefProp}>
        {children}
      </div>
    </div>
  );
};

const CollapseCascade = (props: any) => {
  const contentRefMain = useRef<HTMLDivElement>(null);
  const contentRefInner = useRef<HTMLDivElement>(null);
  const titleRefMain = useRef<HTMLDivElement>(null);
  const titleRefInner = useRef<HTMLDivElement>(null);

  const [isCloseMain, setIsCloseMain] = useState(true);

  // TODO: вот такое сост-е нужно создать для каждого свое
  const [isCloseInner, setIsCloseInner] = useState(true);

  const { content } = props;

  const toggleOpenMain = () => {
    setIsCloseMain((state) => !state);
  };

  const toggleOpenInner = () => {
    setIsCloseInner((state) => !state);
  };

  // TODO: починить разворачивалку, когда несколько; сейчас разворачивается сразу все
  // сделать для списка разворачивание по высоте заголовков, а для остального по контенту - отдельно для каждого
  const [heightContent, setHeightContent] = useState(0);

  useEffect(() => {
    if (contentRefMain.current && titleRefInner.current) {
      if (isCloseMain) {
        const minHeight = '0px';
        if (isCloseMain) {
          const mainHeight =
            contentRefMain.current.getBoundingClientRect().height;
          if (mainHeight !== 0) {
            setHeightContent(mainHeight);
          }
          contentRefMain.current.style.height = minHeight;
          return;
        }
      }

      contentRefMain.current.style.height = `${heightContent}px`;
    }
  }, [isCloseMain, heightContent]);

  // useEffect(() => {
  //   if (contentRefInner.current && contentRefMain.current && titleRefInner.current) {
  //     const innerHeight =
  //     const titleHeight = titleRefInner.current.getBoundingClientRect().height;
  //     contentRefMain.current.style.height = `${heightContent + innerHeight - titleHeight}px`;
  //   }
  // }, [isCloseInner]);

  return (
    <>
      <Item
        key={`${content.label}-main`}
        title2={content.label}
        props1={props}
        toggleOpen={toggleOpenMain}
        isClose={isCloseMain}
        contentRefProp={contentRefMain}
        titleRefProp={titleRefMain}
      >
        {content.list &&
          content.list.map((item2: any) => (
            <Item
              key={`${content.label}-inner`}
              title2={`sub: ${item2.label}`}
              props1={props}
              toggleOpen={toggleOpenInner}
              isClose={isCloseInner}
              contentRefProp={contentRefInner}
              titleRefProp={titleRefInner}
            >
              {
                // !isCloseInner && (
                <CheckboxGroup
                  key={`${content.label}`}
                  checkboxList={JSON.parse(JSON.stringify(item2.list))}
                  groupName={content.value}
                  subGroupName={item2.value}
                  direction={'vertical'}
                  onChangeGroup={props.onChange}
                />
                // )
              }
            </Item>
          ))}
      </Item>
    </>
  );
};

export default CollapseCascade;
