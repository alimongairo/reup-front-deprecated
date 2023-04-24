import Image from 'next/image';

import cx from './index.module.scss';
import { useRouter } from 'next/router';
import { EPagesRoutes } from '@/constants/router';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';

interface IProps {
  id: number;
  img: any; //TODO убрать
  title: string;
  brand: string;
}

const CollectionCard = ({ id, img, title, brand }: IProps) => {
  const router = useRouter();

  const goToCollection = () => {
    router.push(`${EPagesRoutes.Collection}/${id}`);
  };

  return (
    <div className={cx.wrapper} onClick={goToCollection}>
      <Image src={img} alt="img" width={355} />
      <div className={cx.text}>
        <Text size="big">{title}</Text>
        <Text size="thin">{brand}</Text>
      </div>
    </div>
  );
};

export default CollectionCard;
