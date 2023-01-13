import Text from '@/components/common/Text';
import { TProductCard } from '@/store/productDetail/type';
import cx from './index.module.scss';

type IProps = {
  dataSourse: TProductCard;
};

const DescriptionMain = ({ dataSourse }: IProps) => {
  return (
    <div className={cx.descriptionOverflow}>
      <Text>{dataSourse.description}</Text>
    </div>
  );
};

export default DescriptionMain;
