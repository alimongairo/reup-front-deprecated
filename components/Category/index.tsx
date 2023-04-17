import { useRouter } from 'next/router';
import Image from 'next/image';

import FiltersForProducts from '@/components/common/FiltersForProducts';
import ProductFeed from '@/components/ProductFeed';
import Heading from '@/components/common/Heading';

import img from './image.jpg';
import cx from './index.module.scss';

const CategoryLayout = () => {
  const router = useRouter();

  return (
    <div>
      <div className={cx.banner}>
        <Heading>{router.query.category}</Heading>
        <Image src={img} alt={'img'} />
      </div>
      <div className={cx.content}>
        <FiltersForProducts />
        <ProductFeed />
      </div>
    </div>
  );
};

export default CategoryLayout;
