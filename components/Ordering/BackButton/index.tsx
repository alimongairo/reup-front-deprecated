import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useRouter } from 'next/router';
import { EPagesRoutes } from '@/constants/router';
import classNames from 'classnames';
import Text from '@/components/common/Text';
import MoreArrowSvg from '@/static/icons/MoreArrowSvg';
import cx from './index.module.scss';

interface IMoreButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const BackButton = ({ className, ...props }: IMoreButtonProps) => {
  const router = useRouter();

  const onClickBack = () => {
    router.push(EPagesRoutes.Basket);
  };

  return (
    <div
      onClick={onClickBack}
      className={classNames(cx.back, className)}
      {...props}
    >
      <Text size="normal">назад</Text>
      <MoreArrowSvg direction="left" />
    </div>
  );
};

export default BackButton;
