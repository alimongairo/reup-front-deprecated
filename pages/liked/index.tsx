import MainLayout from '@/layouts/MainLayout';
import LikedList from '@/components/LikedList';
import SubHeaderLK from '@/components/SubHeaderLK';

import { TProductItem } from '@/store/productList/type';
import product from 'static/img/product1.png';

const dataSource: TProductItem[] = [];

for (let i = 0; i <= 15; i += 1) {
  dataSource.push({
    name: 'Блузка женская “Лэйди”',
    vendor_id: i,
    brand: 'Befree',
    price: 7500,
    imgSource: product, // TODO replace to url
    like: true,
  });
}

const LikedListPage = () => {
  return (
    <MainLayout>
      <SubHeaderLK />
      <LikedList dataSource={dataSource} />
    </MainLayout>
  );
};

export default LikedListPage;
