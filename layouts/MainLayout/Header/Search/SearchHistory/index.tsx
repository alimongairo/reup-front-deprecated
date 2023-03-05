import Image from 'next/image';

import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';

import close from '@/static/icons/close.svg';

import cx from '@/layouts/MainLayout/Header/Search/index.module.scss';

interface IHistoryItemProps {
  title: string;
}

const HistoryItem = ({ title }: IHistoryItemProps) => {
  const onClear = () => {
    console.log('delete', title);
  };

  return (
    <div className={cx.historyRow}>
      <Text size="thin">{title}</Text>
      <Image src={close} alt={'close'} onClick={onClear} />
    </div>
  );
};

const SearchHistory = () => {
  return (
    <div className={cx.history}>
      <div className={cx.historyBlock}>
        <Heading className={cx.historyTitle} tag="h3">
          вы недавно искали
        </Heading>
        <HistoryItem title="рубашка белая" />
        <HistoryItem title="костюм серый" />
        <HistoryItem title="пижама женская" />
      </div>
      <div className={cx.historyBlock}>
        <Heading className={cx.historyTitle} tag="h3">
          популярные запросы
        </Heading>
        <HistoryItem title="рубашка белая" />
        <HistoryItem title="костюм серый" />
        <HistoryItem title="пижама женская" />
      </div>
    </div>
  );
};

export default SearchHistory;
