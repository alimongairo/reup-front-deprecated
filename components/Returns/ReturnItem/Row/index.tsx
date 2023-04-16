import Image from 'next/image';

import Text from 'components/common/Text';

import product from 'static/img/product1.png';
import product1 from 'static/img/product2.png';
import cx from './index.module.scss';

const Row = () => {
  return (
    <div>
      <div className={cx.product}>
        <Image src={product} alt={'product'} />
        <Text size="big">Блузка женская “Лэйди”</Text>
        <Text size="thin">Befree</Text>
        <Text size="thin">размер 44 / синий</Text>
      </div>
      <div>
        <div>
          <Text size="big">причина возврата</Text>
          <Text size="thin">причина возврата</Text>
        </div>
        <div>
          <Text size="big">комментарий от вас</Text>
          <Text size="thin">
            Lorem ipsum dolor sit amet consectetur. Morbi etiam dictumst blandit
            ut lobortis faucibus. Non venenatis etiam nec nisl.
          </Text>
        </div>
        <div>
          <Text size="big">ваши фотографии и видео</Text>
          <div>
            <Image src={product1} alt={'product1'} />
            <Image src={product1} alt={'product1'} />
            <Image src={product1} alt={'product1'} />
          </div>
        </div>
        <div>
          <Text size="big">вернем вам по адресу</Text>
          <Text size="thin">Н.Новгород, ул.Ошарская 8, кв 9</Text>
        </div>
        <div>
          <Text size="big">сумма возврата</Text>
          <Text size="thin">1000 ₽ / на карту</Text>
        </div>
      </div>
    </div>
  );
};

export default Row;
