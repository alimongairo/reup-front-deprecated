import { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

import Text from '@/components/common/Text';

import MoreArrowSvg from '@/static/icons/MoreArrowSvg';

import cx from './index.module.scss';

interface IMoreButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const MoreButton = ({ className, ...props }: IMoreButtonProps) => {
  return (
    <div className={classNames(cx.more, className)} {...props}>
      <Text size="normal">больше</Text>
      <MoreArrowSvg />
    </div>
  );
};

export default MoreButton;
