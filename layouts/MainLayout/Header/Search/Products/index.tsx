import Image from 'next/image';
import { useRouter } from 'next/router';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';

import { EPagesRoutes } from '@/constants/router';

import product from '@/static/img/bigProduct_remove.png';
import cx from '@/layouts/MainLayout/Header/Search/index.module.scss';

interface IProductItem {
  id: string | number;
  img: any;
  title: string;
  subTitle: string;
}

const ProductItem = ({ img, title, subTitle, id }: IProductItem) => {
  const router = useRouter();

  const goToProduct = (productId: string | number) => {
    router.push(`${EPagesRoutes.ProductDetail}/${productId}`);
  };

  return (
    <div className={cx.imgCard} onClick={() => goToProduct(id)}>
      <Image src={img} alt={'product'} />
      <div className={cx.cardInfo}>
        <Heading tag="h3">{title}</Heading>
        <Text size="thin">{subTitle}</Text>
      </div>
    </div>
  );
};

const mock: IProductItem[] = [];

for (let i = 0; i <= 12; i += 1) {
  mock.push({
    id: i,
    title: 'Джинсы крутецкие',
    subTitle: 'BEFREE',
    img: product,
  });
}

const Products = () => {
  return (
    <div className={cx.previewWrapper}>
      <div className={cx.preview}>
        {mock.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
