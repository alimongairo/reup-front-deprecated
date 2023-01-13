import { useEffect } from 'react';
import { Skeleton } from 'antd';
import Image from 'next/image';
import Heading from '../../Heading';
import DescriptionBlock from './DescriptionBlock';
import LeftUpBlock from './LeftUpBlock';
import PopupClose from './PopupClose';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { TProductItem } from '@/store/productList/type';
import ScrollSlider from '@/components/common/ScrollSlider';
import { getProductDetailDataSource } from '@/store/productDetail/selectors';
import { getProductDetailAction } from '@/store/productDetail/thunk';
import Jeans from '@/static/img/Jeans.png';
import cx from './index.module.scss';

type IProps = {
  onLike: (id: number) => void;
  onAddToBasket: (id: number) => void;
  goToProductDetail: () => void;
  setModal: any;
  productList: TProductItem[]
} & TProductItem;
  
const Modal = ({onLike, goToProductDetail, id, onAddToBasket, setModal, price, productList }:IProps) => {

  const dispatch = useAppDispatch();
  const data = useAppSelector(getProductDetailDataSource);
  
  const modalList = [...productList, ...productList].map((product) => {
    return (
      <Image key={product.id} onClick={goToProductDetail} className={cx.Jeans} src={Jeans} alt="Jeans" />
    );
  });

  useEffect(() => {
    if (id) {
      dispatch(getProductDetailAction(String(id)));
    }
  }, [id]);

  if (!data) {
    return <Skeleton active />;
  }

  return (
    <div className={cx.wrapper}>
      <div className={cx.popup}>
        <div className={cx.scroll}>
          <PopupClose setModal={setModal}/>
          <div className={cx.upBlock}>
            <div className={cx.leftUpBlock}>
              <LeftUpBlock onLike={onLike} id={id} dataSourse={data}/>
            </div>
            <DescriptionBlock dataSourse={data} id={id} price={price} onAddToBasket={onAddToBasket} />
          </div>

          <div className={cx.maybeLike}>
            <Heading size='medium'>возможно, вам понравится</Heading>
          </div>

          <div className={cx.slideBlock}>
            <ScrollSlider cardList={modalList}/>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Modal;
