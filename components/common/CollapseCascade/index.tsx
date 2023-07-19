import { ReactNode, useEffect, useRef, useState } from 'react';
import { CheckboxGroup } from '@/components/common/Checkbox';
import Text from 'components/common/Text';
import Heading from '@/components/common/Heading';

import leftArrow from 'static/icons/leftArrow.svg';
import cx from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

const Item = (props: any) => {
  const { children, title2, props1, toggleOpen, isClose } = props;

  console.log(props);
  return (
    <div className={cx.wrapper}>
      <div className={cx.collapseIcon} onClick={toggleOpen}>
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
      <Heading tag="h4" className={cx.title} onClick={toggleOpen}>
        {title2}
      </Heading>
      <div className={cx.content} ref={props1.contentRef}>
        {children}
      </div>
    </div>
  );
};

const categories: any[] = [
  {
    label: 'выделить все',
    value: 'all',
    id: 'all',
    labelPlacement: 'right',
  },
  {
    label: 'Cинтетика',
    value: 'synthetics',
    id: 'synthetics',
    labelPlacement: 'right',
  },
];

const CollapseCascade = (props: any) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClose, setIsClose] = useState(true);
  const [heightContent, setHeightContent] = useState(0);

  const toggleOpen = () => {
    console.log('toggleOpen');
    setIsClose((state) => !state);
  };

  // const toggleOpen2 = () => {
  //   console.log("toggleOpen")
  //   setIsClose2((state) => !state);
  // };
  // const [isClose2, setIsClose2] = useState(true);

  // useEffect(() => {
  //   if (contentRef.current) {
  //     if (isClose) {
  //       const height = contentRef.current.getBoundingClientRect().height;
  //       const minHeight = '0px';
  //       if (height !== 0) {
  //         setHeightContent(height);
  //       }
  //       contentRef.current.style.height = minHeight;
  //       return;
  //     }
  //     contentRef.current.style.height = `${heightContent}px`;
  //   }
  // }, [isClose]);

  // TODO: сделать бесконечную вложенность
  return (
    <>
      {props.content.map((item1: any) => (
        <Item
          key={item1.label}
          title2={item1.label}
          props1={props}
          toggleOpen={toggleOpen}
          isClose={isClose}
        >
          {item1.list.map((item2: any) => (
            <Item
              key={item1.label}
              title2={item2.label}
              props1={props}
              toggleOpen={toggleOpen}
              isClose={isClose}
            >
              {item2.list.map((item3: any) => (
                <CheckboxGroup
                  key={item1.label}
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
