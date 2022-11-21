import Link from 'next/link';

import { basketProductCard } from '@/constants/componentsSizes';
import { EPagesRoutes } from '@/constants/router';
import { multiplyRem } from '@/helpers/multiplyRem';

import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button, Image, Card, Tooltip } from 'antd';
import cx from './index.module.scss';

interface IProps {
  productId: number;
  amount: number;
}

const BasketProductCard = ({ productId, amount }: IProps) => {
  return (
    <div className={cx.basketProductCard}>
      <Link href={`${EPagesRoutes.ProductDetail}/${productId}`}>
        <Image
          width={basketProductCard.height}
          height={basketProductCard.height}
          preview={false}
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          alt="product image"
        />
      </Link>

      <Card
        title="Product Title"
        style={{
          width: basketProductCard.height,
          height: basketProductCard.height,
        }}
        extra={<a href={`${EPagesRoutes.ProductDetail}/${productId}`}>More</a>}
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
        <p>
          Product Description Product Description Product Description Product
          Description
        </p>

        <div className={cx.priceAndAmount}>
          <div>100$</div>
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
