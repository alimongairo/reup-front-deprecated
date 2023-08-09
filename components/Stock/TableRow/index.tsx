import { useCallback, useMemo, useState } from 'react';
import img from '../img.png';
import editIcon from '@/static/icons/edit.svg';
import deleteIcon from '@/static/icons/delete.svg';
import downArrow from '@/static/icons/downArrowSmall.svg';
import upArrow from '@/static/icons/upArrowSmall.svg';

import cx from '../index.module.scss';

import Image from 'next/image';
import Button from '../../common/Button';
import Modal from '../../common/Modal';
import Alert from '../../common/Confirm';
import Confirm from '../../common/Confirm';

export interface StockItem {
  img: string | null;
  name: string;
  article: string;
  amount: number;
  detailedAmount: number[] | null;
  visibility: boolean;
}

const sizes = ['xl', 'l', 'm', 's', 'xs'];

interface Props {
  item: StockItem;
}

const TableRow = ({ item }: Props) => {
  const [showDetails, setShowDetails] = useState<Boolean>(false);
  const [open, setOpen] = useState(false);
  const [visibility, setVisibility] = useState(item.visibility);

  const soldOut = item.amount === 0;

  return (
    <>
      <tr className={`${cx.itemRow} ${showDetails && cx.noBorder}`}>
        <td>
          <div style={{ height: '100px' }}>
            <Image src={img} alt="img"></Image>
          </div>
        </td>
        <td>
          <div className={cx.name}>
            {item.name}
            <div
              className={cx.detailsIcon}
              onClick={() => setShowDetails(!showDetails)}
            >
              <Image src={showDetails ? upArrow : downArrow} alt="details" />
            </div>
          </div>
        </td>
        <td>
          <div>{item.article}</div>
        </td>
        <td>
          <div className={cx.amountBox}>{item.amount}</div>
        </td>
        <td>
          <div className={cx.actions}>
            {!soldOut ? (
              <Button onClick={() => setVisibility(!visibility)}>
                {visibility ? 'снять с витрины' : 'на витрину'}
              </Button>
            ) : (
              <Button onClick={() => {}} disable>
                {'раскупили'}
              </Button>
            )}
            <Image src={editIcon} alt="edit" onClick={() => {}} />
            <Image
              src={deleteIcon}
              alt="delete"
              onClick={() => setOpen(true)}
            />
          </div>
        </td>
      </tr>

      {showDetails && (
        <tr className={cx.detailsRow}>
          <td></td>
          <td></td>
          <td>
            <div className={cx.sizes}>
              {sizes.map((el, i) => (
                <div className={cx.sizeItem} key={i}>
                  {el}
                </div>
              ))}
            </div>
          </td>
          <td>
            <div className={cx.detailedAmount}>
              {item.detailedAmount?.map((el, i) => (
                <div className={cx.amountItem} key={i}>
                  {el}
                </div>
              ))}
            </div>
          </td>
          <td></td>
        </tr>
      )}

      <Confirm
        visible={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {}}
      >
        <div>Вы действительно хотите удалить товар?</div>
        <div>&nbsp;</div>
        <div style={{ fontSize: '20px' }}>
          Это означает, что товар будет удален с нашего маркетплейса, но вы все
          еще будете обязаны выполнить доставку тем покупателям, которые уже
          купили этот товар, но еще не получили его.
        </div>
      </Confirm>
    </>
  );
};
export default TableRow;
