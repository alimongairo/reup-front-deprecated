import React from 'react';
import Image from 'next/image';
import Close from '@/static/icons/popupClose.svg';
import Like from '@/static/icons/like.svg';
import LeftArrow from '@/static/icons/leftArrow.svg';
import Jeans from '@/static/img/Jeans.png';
import ModelLeft from '@/static/img/ModelPopupOne.png';
import ModelRight from '@/static/img/ModelPopupTwo.png';
import cx from './index.module.scss';
import { randomInteger } from '@/helpers/utils';

const Modal = ({ setModal }: any) => {
  const article = randomInteger(1000, 9999);

  const closePopup = () => {
    setModal(false);
  };

  return (
    <div className={cx.wrapper}>
      <div className={cx.popup}>
        <div className={cx.popupClose}>
          <Image onClick={closePopup} src={Close} alt="close" />
        </div>

        <div className={cx.upBlock}>
          <div className={cx.leftUpBlock}>
            <Image className={cx.like} src={Like} alt="Like" />
            <Image className={cx.modelLeft} src={ModelLeft} alt="Model one" />
            <Image className={cx.modelRight} src={ModelRight} alt="Model two" />
          </div>

          <div className={cx.descriptionBlock}>
            <h2>название товара</h2>
            <h4>название бренда</h4>
            <span>0{article}</span>
            <p>О ТОВАРЕ</p>
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
            <div>
              <span>3990 </span>
              <span>1990</span>
            </div>
            <button>выбрать размер</button>
            <button>добавить в корзину</button>
          </div>
        </div>

        <h2>возможно, вам понравится</h2>

        <div className={cx.slideBlock}>
          <Image className={cx.leftArrow} src={LeftArrow} alt="Left Arrow" />
          
          <div>
            <Image className={cx.Jeans} src={Jeans} alt="Jeans" />
          </div>
          <Image className={cx.rightArrow} src={LeftArrow} alt="Right Arrow" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
