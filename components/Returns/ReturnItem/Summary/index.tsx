import Text from '@/components/common/Text';

import cx from './index.module.scss';

const Summary = () => {
  return (
    <div>
      <div>
        <Text size="big" className={cx.num}>
          №200493 / в пути
        </Text>
        <Text size="thin">6 товаров</Text>
      </div>
      <div>
        <div>
          <Text size="big">дата создания заявки</Text>
          <Text size="thin">9.01.2022</Text>
        </div>
        <div>
          <Text size="big">способ возврата</Text>
          <Text size="thin">Н.Новгород, ул.Ошарская 8, кв 9</Text>
        </div>
        <div>
          <Text size="big">сумма возврата</Text>
          <Text size="thin">5070 ₽</Text>
        </div>
      </div>
    </div>
  );
};

export default Summary;
