import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import { TProductCard } from '@/store/productDetail/type';

type IProps = {
  dataSourse: TProductCard;
};

const DescriptionHeader = ({ dataSourse }: IProps) => {
  return (
    <div>
      <div>
        <Heading size="medium">{dataSourse.title}</Heading>
      </div>
      <div>
        <Heading size="medium">{dataSourse.brandTitle}</Heading>
      </div>
      <Text>0{dataSourse.brandCode}</Text>
      <Text size="bold">О ТОВАРЕ</Text>
    </div>
  );
};

export default DescriptionHeader;
