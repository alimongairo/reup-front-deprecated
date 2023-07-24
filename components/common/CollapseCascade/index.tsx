import { createRef, useEffect, useRef, useState } from 'react';
import { CheckboxGroup } from '@/components/common/Checkbox';
import Heading from '@/components/common/Heading';

import leftArrow from 'static/icons/leftArrow.svg';
import cx from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

// TODO: rewrite any
const Item = ({
  children,
  title2,
  myRef,
  onClick,
  isCloseMain,
  setMainHeightContent,
}: any) => {
  const [heightContent, setHeightContent] = useState(0);
  const [isClose, setIsClose] = useState(true);

  const toggleOpen = (e: any) => {
    // console.log("toggleOpen");
    // console.log(myRef)
    if (myRef && myRef.current) {
      e.stopPropagation();
      console.log('TOGGLE OPEN');
      setIsClose((state) => !state);
    }
  };

  useEffect(() => {
    console.log(isCloseMain);

    if (myRef && myRef.current) {
      console.log(myRef.current);
      if (isClose) {
        // console.log(myRef.current.getBoundingClientRect().height);
        const height =
          myRef.current.children[0]?.getBoundingClientRect().height;
        const minHeight = '0px';
        if (height !== 0) {
          setHeightContent(height);
        }
        myRef.current.style.height = minHeight;
        return;
      }
      myRef.current.style.height = `${heightContent}px`;
      console.log('SET MAIN');
      setMainHeightContent((prev: number) => prev + heightContent);
    }
  }, [isClose, myRef, isCloseMain, heightContent, setMainHeightContent]);

  const fn = (e: any) => {
    if (onClick !== undefined) {
      onClick();
    } else {
      toggleOpen(e);
    }
  };
  return (
    <div className={cx.wrapper} onClick={fn}>
      <div className={cx.titleWrapper}>
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
      <div className={cx.content} ref={myRef}>
        {children}
      </div>
    </div>
  );
};

const CollapseCascade = (props: any) => {
  const { content } = props;

  const [elRefs, setElRefs] = useState([]);

  const arrLength = content.list.length;

  useEffect(() => {
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill(null)
        .map((_, i) => elRefs[i] || createRef()),
    );
  }, [arrLength]);

  const contentRef = createRef<HTMLDivElement>();
  const [isCloseMain, setIsCloseMain] = useState(true);
  const [mainHeightContent, setMainHeightContent] = useState(0);

  const toggleOpen = () => {
    console.log('ON CLICK');
    setIsCloseMain((state) => !state);
  };

  useEffect(() => {
    console.log('----- MAIN REF -------');
    if (contentRef.current) {
      if (isCloseMain) {
        const height = contentRef.current.getBoundingClientRect().height;
        const minHeight = '0px';
        if (height !== 0) {
          setMainHeightContent(height);
        }
        contentRef.current.style.height = minHeight;
        return;
      }
      contentRef.current.style.height = `${mainHeightContent}px`;
    }
  }, [isCloseMain, mainHeightContent]);

  return (
    <Item
      key={`${content.label}-main`}
      title2={content.label}
      onClick={toggleOpen}
      // ref={contentRef}
      // onClick={toggleOpen}
      // myRef={contentRef}
    >
      <div ref={contentRef} className={cx.contentMain}>
        {/* <div>dsdsdsdsd</div> */}
        {/* <div ref={contentRef}> */}
        {
          // !content.isClose &&

          content.list.map((item2: any, i: number) => (
            <Item
              key={`${content.label}-inner`}
              title2={`sub: ${item2.label}`}
              myRef={elRefs[i]}
              isCloseMain={isCloseMain}
              setMainHeightContent={setMainHeightContent}
            >
              {/* {
              !item2.isClose && ( */}
              {!isCloseMain && (
                <CheckboxGroup
                  key={`${content.label}`}
                  checkboxList={JSON.parse(JSON.stringify(item2.list))}
                  groupName={content.value}
                  subGroupName={item2.value}
                  direction={'vertical'}
                  onChangeGroup={props.onChange}
                />
              )}
              {/* )
            } */}
            </Item>
          ))
        }{' '}
        {/* </div> */}
      </div>
    </Item>
  );
};

export default CollapseCascade;
