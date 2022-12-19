import ScrollSlider from '@/components/common/ScrollSlider';
import { randomInteger } from '@/helpers/utils';
import { useAppSelector } from '@/hooks/store';
import ArrowDown from '@/static/icons/arrow-down.svg';
import Like from '@/static/icons/like.svg';
import Close from '@/static/icons/popupClose.svg';
import Jeans from '@/static/img/Jeans.png';
import { getProductDetailDataSource } from '@/store/productDetail/selectors';
import { TProductItem } from '@/store/productList/type';
import Image from 'next/image';
import { useMemo } from 'react';
import ProductCard from '..';
import Select from '../../Select';
import cx from './index.module.scss';

type IProps = {
  onLike: (id: number) => void;
  onAddToBasket: (id: number) => void;
  goToProductDetail: () => void;
  setModal: any;
  productList: TProductItem[]
} & TProductItem;
  
const Modal = ({onLike, goToProductDetail, id, onAddToBasket, setModal, imgSource, title, price, description, productList }:IProps) => {
  console.log(productList)

  const article = randomInteger(1000, 9999);

  const data = useAppSelector(getProductDetailDataSource);

  const closePopup = () => {
    setModal(false);
  };

  const sizesOption = useMemo(() => {
    return (
      data?.sizes.map((i) => ({
        id: i,
        value: i,
        label: String(i),
      })) || []
    );
  }, []);

  const modalList = [...productList, ...productList].map((product) => {
    return (
      <Image key={product.id} onClick={goToProductDetail} className={cx.Jeans} src={Jeans} alt="Jeans" />
    );
  });
  const cardList = [...productList, ...productList].map((product) => {
    return (
      <Image key={product.id} src={product.imgSource} alt="slider"/>
    );
  });

  return (
    <div className={cx.wrapper}>
      <div className={cx.popup}>
        <div className={cx.popupClose}>
          <Image onClick={closePopup} src={Close} alt="close" />
        </div>

        <div className={cx.upBlock}>


          <div className={cx.leftUpBlock}>
            <div className={cx.leftUpBlockLike}>
              <Image onClick={() => onLike(id)} className={cx.like} src={Like} alt="Like" />
              <Image className={cx.modelLeft} src={imgSource} alt="Model one" />
            </div>
          </div>

          <div className={cx.descriptionBlock}>
            <h2>{title}</h2>
            <h4>название бренда</h4>
            <span className={cx.article}>0{article}</span>
            <p>О ТОВАРЕ</p>

            {/* productList.description */}

            <div className={cx.descriptionOverflow}> 
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur reiciendis, accusantium eius rerum dolores,
                doloremque iusto tenetur quibusdam quasi, consequatur nulla.
                Modi provident itaque hic quae. Ratione temporibus fugiat ex!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur reiciendis, accusantium eius rerum dolores,
                doloremque iusto tenetur quibusdam quasi, consequatur nulla.
                Modi provident itaque hic quae. Ratione temporibus fugiat ex!
              </p>
            </div>
            <div className={cx.btnPrice}>
              <div className={cx.price}>
                <span className={cx.throughPrice}>9900 </span>
                <span className={cx.activePrice}>{price}</span>
              </div>
              <div className={cx.chooseSize}>
                <Select title="выбрать размер" options={sizesOption}/>
                <Image className={cx.arrowDown} src={ArrowDown} alt='sizes'/>
                <span>{}</span>
              </div>
              <div className={cx.appCart}>
                <button onClick={() => onAddToBasket(id)} >добавить в корзину</button>
              </div>      
            </div>
            
          </div>
        </div>

        <h2>возможно, вам понравится</h2>

        <div className={cx.slideBlock}>
          <ScrollSlider cardList={modalList}/>
        </div>

        
      </div>
    </div>
  );
};

export default Modal;
