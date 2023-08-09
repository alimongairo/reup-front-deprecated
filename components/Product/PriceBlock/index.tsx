import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import cx from './index.module.scss';

import Heading from '../../common/Heading';
import TextField from '../../common/TextField';

import { Product } from '..';

interface Props {
  state: Product;
  setState: Dispatch<SetStateAction<Product>>;
}

const PriceBlock = ({ state, setState }: Props) => {
  const handleChange = useCallback(
    (name: string) => {
      return (value: string) => setState({ ...state, [name]: value });
    },
    [setState, state],
  );

  const [withDiscount, setWithDiscount] = useState('');
  const [delivery, setDelivery] = useState('0');
  const [comission, setComission] = useState('');
  const [total, setTotal] = useState('');

  useEffect(
    () =>
      setWithDiscount(
        String(Number(state.price) * (1 - Number(state.discount) / 100)),
      ),
    [state.discount, state.price],
  );
  useEffect(
    () => setComission(String(Number(state.price) * 0.15)),
    [state.price],
  );
  useEffect(
    () =>
      setTotal(
        String(Number(withDiscount) - Number(delivery) - Number(comission)),
      ),
    [comission, delivery, withDiscount],
  );

  return (
    <div className={cx.container}>
      <Heading tag="h2">стоимость</Heading>
      <div className={cx.content}>
        <div className={cx.inputBlock}>
          <div className={cx.price}>
            <TextField
              label="стоимость"
              value={state.price}
              onChange={handleChange('price')}
            />
          </div>
          <div className={cx.sale}>
            <TextField
              label="скидка"
              value={state.discount}
              onChange={handleChange('discount')}
            />
            %
          </div>
          <div className={cx.sum}>
            <span className={cx.sumLabel}>
              стоимость&nbsp;со&nbsp;скидкой:&nbsp;
            </span>
            <span className={cx.sumValue}>
              {Math.floor(Number(withDiscount) * 100) / 100}
            </span>
          </div>
        </div>
        <div className={cx.infoBlock}>
          <div className={cx.infoItem}>
            <div>стоимость доставки: </div>
            <div>{delivery} ₽</div>
          </div>
          <div className={cx.infoItem}>
            <div>комиссия REUP (15%):</div>
            <div>{Math.floor(Number(comission) * 100) / 100} ₽</div>
          </div>
        </div>
        <div className={cx.total}>
          <div className={cx.totalLabel}>
            итоговая сумма, которую вы получите:
          </div>
          <div>{Math.floor(Number(total) * 100) / 100} ₽</div>
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
