import Link from 'next/link';
import { EPagesRoutes } from '@/constants/router';

import { sizeToRem } from '@/helpers/sizeToRem';
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button, Image, Card, Tooltip } from 'antd';

import cx from './index.module.scss';

interface IProps {
  productId: number;
  amount: number;
}

const BasketProductCard = ({ productId, amount }: IProps) => {
  const cardHeight: number = 18; // rem
  const cardHeightInRem: string = sizeToRem(cardHeight);

  return (
    <div className={cx.basketProductCard}>
      {/* Card Image */}
      <Link href={`${EPagesRoutes.ProductDetail}/${productId}`}>
        <Image
          width={cardHeightInRem}
          height={cardHeightInRem}
          preview={false}
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          alt="product image"
        />
      </Link>

      {/* Card title, description, price and amount */}
      <Card
        title="Product Title"
        style={{ width: cardHeightInRem, height: cardHeightInRem }}
        extra={<a href={`${EPagesRoutes.ProductDetail}/${productId}`}>More</a>}
        headStyle={{
          height: sizeToRem(cardHeight / 5),
        }}
        bodyStyle={{
          height: sizeToRem(cardHeight * 0.8),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* description */}
        <p>
          Product Description Product Description Product Description Product
          Description
        </p>

        {/* price and amount */}
        <div className={cx.priceAndAmount}>
          <div>100$</div>
          <div className={cx.amount}>
            <Button type="text" size="small" icon={<MinusOutlined />} />
            <div>{amount}</div>
            <Button type="text" size="small" icon={<PlusOutlined />} />
          </div>
        </div>
      </Card>

      {/* delete button */}
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
