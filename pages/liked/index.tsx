import MainLayout from '@/layouts/MainLayout';
import LikedList from '@/components/LikedList';
import SubHeaderLK from '@/components/SubHeaderLK';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { TProductItem } from '@/store/productList/type';
import product from 'static/img/product1.png';
import { useEffect, useState } from 'react';
import { getLikedProductListAction } from '@/store/productList/thunk';

const dataSource: TProductItem[] = [];

// for (let i = 0; i <= 15; i += 1) {
//   dataSource.push({
//     name: 'Блузка женская “Лэйди”',
//     vendor_id: i,
//     brand: 'Befree',
//     price: 7500,
//     main_image: product, // TODO replace to url
//     like: true,
//   });
// }

const LikedListPage = () => {
  const dispatch = useAppDispatch();

  const [likedProductsArr, setLikedProducts] = useState([]);

  useEffect(() => {
    if (window?.localStorage) {
      const likedProducts = JSON.parse(
        localStorage.getItem('likedProducts') as string,
      );

      if (likedProducts) {
        setLikedProducts(likedProducts);
      } else {
        dispatch(getLikedProductListAction());
      }
    } else {
      dispatch(getLikedProductListAction());
    }
  }, []);

  return (
    <MainLayout>
      <SubHeaderLK />
      <LikedList dataSource={likedProductsArr} />
    </MainLayout>
  );
};

export default LikedListPage;
