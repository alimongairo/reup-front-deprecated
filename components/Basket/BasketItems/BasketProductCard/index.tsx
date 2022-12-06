import Link from 'next/link';
import { Button, Image, Card, Tooltip } from 'antd';
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

import { TProductItem } from '@/store/productList/type';
import { basketProductCard } from '@/constants/componentsSizes';
import { EPagesRoutes } from '@/constants/router';
import { multiplyRem } from '@/helpers/multiplyRem';

import cx from './index.module.scss';

interface IProps {
  product: TProductItem;
  amount: number;
}

const BasketProductCard = ({ product, amount }: IProps) => {
  return (
    <div className={cx.basketProductCard}>
      <Link href={`${EPagesRoutes.ProductDetail}/${product.id}`}>
        <Image
          width={basketProductCard.height}
          height={basketProductCard.height}
          preview={false}
          src={product.imgSource.src}
          alt="product image"
        />
      </Link>

      <Card
        title={product.title}
        style={{
          width: basketProductCard.height,
          height: basketProductCard.height,
        }}
        extra={<a href={`${EPagesRoutes.ProductDetail}/${product.id}`}>More</a>}
        headStyle={{
          height: multiplyRem(basketProductCard.height, 0.2),
        }}
        bodyStyle={{
          height: multiplyRem(basketProductCard.height, 0.8),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <p>{product.description}</p>

        <div className={cx.priceAndAmount}>
          <div>{product.price} ₽</div>
          <div className={cx.amount}>
            <Button type="text" size="small" icon={<MinusOutlined />} />
            <div>{amount}</div>
            <Button type="text" size="small" icon={<PlusOutlined />} />
          </div>
        </div>
      </Card>

      <div className={cx.deleteButton}>
        <Tooltip title="delete">
          <Button
            danger
            type="text"
            shape="circle"
            size="large"
            icon={<DeleteOutlined />}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default BasketProductCard;
