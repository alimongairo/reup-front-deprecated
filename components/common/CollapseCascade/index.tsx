import { ReactNode, useEffect, useRef, useState } from 'react';
import { CheckboxGroup } from '@/components/common/Checkbox';
import Text from 'components/common/Text';
import Heading from '@/components/common/Heading';

import leftArrow from 'static/icons/leftArrow.svg';
import cx from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

const Item = (props: any) => {
  const {
    children,
    title2,
    toggleOpen,
    isClose,
    contentRefProp,
    titleRefProp,
  } = props;

  // TODO: в внешнему контейнеру добавлять высоту внутреннего, чтобы была сумма в итоге

  return (
    <div className={cx.wrapper}>
      {/* TODO: для самого верзнего реф надо вешать тупа на заголовок */}
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
  const [isCloseInner, setIsCloseInner] = useState(true);

  const toggleOpenMain = () => {
    setIsCloseMain((state) => !state);
  };

  const toggleOpenInner = () => {
    setIsCloseInner((state) => !state);
  };

  // const toggleOpen2 = () => {
  //   console.log("toggleOpen")
  //   setIsClose2((state) => !state);
  // };
  // const [isClose2, setIsClose2] = useState(true);

  const [heightContent, setHeightContent] = useState(0);

  useEffect(() => {
    if (contentRefMain.current && titleRefInner.current) {
      console.log('CHANGE ');

      if (isCloseMain) {
        const minHeight = '0px';

        if (isCloseMain) {
          console.log('main open');

          const mainHeight =
            titleRefInner.current.getBoundingClientRect().height;

          if (mainHeight !== 0) {
            setHeightContent(mainHeight);
          }

          contentRefMain.current.style.height = minHeight;

          //

          // if(isCloseInner && contentRefInner.current){
          //   console.log('inner open')
          //   const innerHeight = contentRefInner.current.getBoundingClientRect().height;
          //   if (innerHeight !== 0) {
          //     setHeightContent(innerHeight + mainHeight);
          //   }
          //   contentRefInner.current.style.height =minHeight;
          //   return;

          // }
          return;
        }

        //
      }

      contentRefMain.current.style.height = `${heightContent}px`;

      if (!isCloseInner && contentRefInner.current) {
        console.log('inner open');
        const innerHeight =
          contentRefInner.current.getBoundingClientRect().height;
        const heightRes = heightContent + innerHeight;
        contentRefMain.current.style.height = `${heightRes}px`;
        //setHeightContent(heightRes);
      }
    }
  }, [isCloseMain, isCloseInner, heightContent]);

  // useEffect(() => {
  //   if (contentRefInner.current ) {

  //     if (isCloseInner) {
  //       const minHeight = "0px";

  //       if (isCloseInner) {

  //         const mainHeight =
  //         contentRefInner.current.getBoundingClientRect().height;

  //         if (mainHeight !== 0) {
  //           setHeightContent(mainHeight);
  //         }

  //         contentRefInner.current.style.height = minHeight;

  //         //

  //         // if(isCloseInner){
  //         //   const innerHeight = contentRefInner.current.getBoundingClientRect().height;
  //         //   if (innerHeight !== 0) {
  //         //     setHeightContent(innerHeight + mainheight);
  //         //   }
  //         //   contentRefInner.current.style.height =minHeight;
  //         //   return;

  //         // }
  //         return;
  //       }

  //       //
  //     }

  //     contentRefInner.current.style.height = `${heightContent}px`;
  //   }
  // }, [isCloseInner]);

  // TODO: сделать бесконечную вложенность
  return (
    <>
      {props.content.map((item1: any) => (
        <Item
          key={`${item1.label}-main`}
          title2={item1.label}
          props1={props}
          toggleOpen={toggleOpenMain}
          isClose={isCloseMain}
          contentRefProp={contentRefMain}
          titleRefProp={titleRefMain}
        >
          {item1.list.map((item2: any) => (
            <Item
              key={`${item1.label}-inner`}
              title2={item2.label}
              props1={props}
              toggleOpen={toggleOpenInner}
              isClose={isCloseInner}
              contentRefProp={contentRefInner}
              titleRefProp={titleRefInner}
            >
              {item2.list.map((item3: any, index: number) => (
                <CheckboxGroup
                  key={`${item1.label}-${index}`}
                  checkboxList={item3.list}
                  groupName={item3.label}
                  direction={'vertical'}
                  onChangeGroup={() => console.log('onChangeGroup')}
                />
              ))}
            </Item>
          ))}
        </Item>
      ))}
    </>
  );
};

export default CollapseCascade;
