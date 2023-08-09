import { useMemo, useState } from 'react';

import Heading from '../common/Heading';
import Button from '../common/Button';

import cx from './index.module.scss';
import TableRow, { StockItem } from './TableRow';
import DropdownSearch from '../common/DropdownSearch';
import SearchInput from '../common/SearchInput';
import { useRouter } from 'next/router';
import { EPagesRoutes } from '../../constants/router';

const data: StockItem[] = [
  {
    img: null,
    name: 'Блузка женская 1',
    article: '0000000',
    amount: 1,
    detailedAmount: [0, 0, 0, 0, 1],
    visibility: true,
  },
  {
    img: null,
    name: 'Блузка женская 2',
    article: '0000000',
    amount: 123,
    detailedAmount: [0, 5, 0, 0, 2],
    visibility: false,
  },
  {
    img: null,
    name: 'Блузка женская 13',
    article: '0000000',
    amount: 0,
    detailedAmount: [0, 0, 0, 0, 0],
    visibility: false,
  },
];

const StockLayout = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const items = data.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase()),
  );

  const tableHeader = useMemo(() => {
    return (
      <tr className={cx.tableHeader}>
        <td className={cx.fst}>фото</td>
        <td className={cx.snd}>наименование товара</td>
        <td className={cx.trd}>артикул</td>
        <td className={cx.fth}>количество</td>
        <td className={cx.fith}>видимость</td>
      </tr>
    );
  }, []);

  return (
    <div className={cx.wrapper}>
      <div className={cx.header}>
        <Heading>склад</Heading>
        <div className={cx.headerActions}>
          <SearchInput value={search} onChange={setSearch} />
          <Button
            size="small"
            onClick={() => router.push(EPagesRoutes.Product)}
          >
            + добавить товар
          </Button>
        </div>
      </div>
      <table>
        {tableHeader}
        {items.map((el, i) => (
          <TableRow key={i} item={el} />
        ))}
      </table>
    </div>
  );
};

export default StockLayout;
