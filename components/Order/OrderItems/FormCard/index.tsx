import { ReactNode } from 'react';

import cx from './index.module.scss';

interface IProps {
  header: string;
  children?: ReactNode;
}

const FormCard = ({ header, children }: IProps) => {
  return (
    <div className={cx.formCard}>
      <div className={cx.header}>{header}</div>
      {children}
    </div>
  );
};

export default FormCard;
