import {
  PropsWithoutRef,
  ReactNode,
  createRef,
  useEffect,
  useState,
} from 'react';
import { CheckboxGroup } from '@/components/common/Checkbox';
import Heading from '@/components/common/Heading';

import leftArrow from '@/static/icons/leftArrow.svg';
import cx from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

interface IItemProps {
  children: ReactNode;
  title: string;
  myRef?: any;
  onClick?: (e: any) => void;
  isCloseMain?: boolean;
  setMainHeightContent?: (prev: any) => void;
  heightCallback?: any;
}
const Item = ({
  children,
  title,
  myRef,
  onClick,
  isCloseMain,
  setMainHeightContent,
  heightCallback,
}: IItemProps) => {
  const [heightContent, setHeightContent] = useState(0);
  const [isClose, setIsClose] = useState(true);

  const toggleOpen = (e: any) => {
    if (myRef && myRef.current) {
      e.stopPropagation();
      setIsClose((state) => !state);
    }
  };

  useEffect(() => {
    if (myRef?.current && setMainHeightContent) {
      if (isClose && !isCloseMain) {
        const height = myRef.current.getBoundingClientRect().height;
        const minHeight = '0px';
        if (height !== 0) {
          setHeightContent(height);
        }
        myRef.current.style.height = minHeight;
        return;
      }
      myRef.current.style.height = `${heightContent}px`;
    }
  }, [isClose, isCloseMain]);

  useEffect(() => {
    if (myRef?.current && setMainHeightContent) {
      heightCallback(heightContent, isClose);
    }
  }, [isClose, heightContent, myRef]);

  const fn = (e: any) => {
    if (onClick !== undefined) {
      onClick(e);
    } else {
      toggleOpen(e);
    }
  };
  return (
    <div className={cx.wrapper}>
      <div className={cx.titleWrapper} onClick={fn}>
        <Heading tag="h4" className={cx.title}>
          {title}
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

const CollapseCascade = (props: PropsWithoutRef<any>) => {
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
    setIsCloseMain((state) => !state);
  };

  const [innerHeight, setInnerHeight] = useState(0);
  const heightCallback = (value: number, isClose: boolean) => {
    if (!isClose) {
      setInnerHeight((prev: number) => Math.abs(prev) + value);
    } else {
      setInnerHeight((prev: number) => Math.abs(prev) - value);
    }
  };

  useEffect(() => {
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
      contentRef.current.style.height = `${mainHeightContent + innerHeight}px`;
    }
  }, [isCloseMain, innerHeight]);

  return (
    <Item
      key={`${content.label}-main`}
      title={content.label}
      onClick={toggleOpen}
    >
      <div ref={contentRef} className={cx.contentMain}>
        {content.list.map((item2: any, i: number) => (
          <Item
            key={`${content.label}-${i}-inner`}
            title={`sub: ${item2.label}`}
            myRef={elRefs[i]}
            isCloseMain={isCloseMain}
            setMainHeightContent={setMainHeightContent}
            heightCallback={heightCallback}
          >
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
          </Item>
        ))}
      </div>
    </Item>
  );
};

export default CollapseCascade;
