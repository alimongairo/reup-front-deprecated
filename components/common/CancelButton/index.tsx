import { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

import Text from '@/components/common/Text';

import cx from './index.module.scss';
import MoreArrowSvg from '../../../static/icons/MoreArrowSvg';

interface IMoreButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const CancelButton = ({ className, ...props }: IMoreButtonProps) => {
  return (
    <div className={classNames(cx.more, className)} {...props}>
      <Text size="normal">отмена</Text>
      <MoreArrowSvg direction="left" />
    </div>
  );
};

export default CancelButton;
