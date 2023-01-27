import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Text from '@/components/common/Text';

import moreArrow from '@/static/icons/moreArrow.svg';

import cx from './index.module.scss';

interface IMoreButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const MoreButton = ({ className, ...props }: IMoreButtonProps) => {
  return (
    <div className={classNames(cx.more, className)} {...props}>
      <Text size="bold">больше</Text>
      <Image src={moreArrow} alt="more" />
    </div>
  );
};

export default MoreButton;
