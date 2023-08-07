import {
  PropsWithoutRef,
  ReactNode,
  createRef,
  useEffect,
  useState,
} from 'react';
import { CheckboxGroup } from '@/components/common/Checkbox';
import Heading from '@/components/common/Heading';

import leftArrow from 'static/icons/leftArrow.svg';
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
}
const Item = ({
  children,
  title,
  myRef,
  onClick,
  isCloseMain,
  setMainHeightContent,
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
    if (myRef && myRef.current) {
      if (isCloseMain && setMainHeightContent) {
        setHeightContent(0);
        setMainHeightContent(0);
        setIsClose(true);
        return;
      }

      if (isClose) {
        if (myRef.current.children[0]) {
          const height =
            myRef.current.children[0]?.getBoundingClientRect().height;
          const minHeight = '0px';
          if (height !== 0) {
            setHeightContent(height + 32);
          }
          myRef.current.style.height = minHeight;

          if (setMainHeightContent) {
            setMainHeightContent(heightContent + 32);
          }
          return;
        }
      } else {
        myRef.current.style.height = `${heightContent}px`;
        if (setMainHeightContent) {
          setMainHeightContent((prev: number) => prev + heightContent);
        }

        // внутрннее
        return;
      }
    }
  }, [isClose, myRef, isCloseMain, heightContent, setMainHeightContent]);

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

  useEffect(() => {
    if (contentRef.current) {
      if (isCloseMain) {
        contentRef.current.style.height = '0px';
        const height = contentRef.current.getBoundingClientRect().height;
        const minHeight = '0px';
        if (height !== 0) {
          setMainHeightContent(height);
        }
        contentRef.current.style.height = minHeight;
        return;
      } else {
        contentRef.current.style.height = `${mainHeightContent}px`;
      }
    }
  }, [isCloseMain, mainHeightContent]);

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
