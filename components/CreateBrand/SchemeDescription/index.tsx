import Text from '@/components/common/Text';

import cx from '../index.module.scss';

interface IProps {
  description: string;
}

const SchemeDescription = ({ description }: IProps) => {
  return (
    <div className={cx.description}>
      <Text size={'thin'}>{description}</Text>
    </div>
  );
};

export default SchemeDescription;
