import Image from 'next/image';

import cx from './index.module.scss';
import { useRouter } from 'next/router';
import { EPagesRoutes } from '@/constants/router';

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
      <div className={cx.imgWrapper}>
        <Image src={img} alt="img" width={400} />
      </div>
      <div className={cx.text}>
        <h1>{title}</h1>
        <span>{brand}</span>
      </div>
    </div>
  );
};

export default CollectionCard;
