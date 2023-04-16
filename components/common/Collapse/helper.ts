import { RefObject } from 'react';

const toggleCollapse = (
  height: number,
  contentRef: RefObject<HTMLDivElement>,
  isOpen: boolean,
) => {
  return () => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.height = `${height}px`;
    }
    if (!isOpen && contentRef.current) {
      contentRef.current.style.height = `0px`;
    }
  };
};
