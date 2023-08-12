import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { EPagesRoutes } from '../../constants/router';
import cx from './index.module.scss';

import MainBlock from './MainBlock';
import MediaBlock from './MediaBlock';
import DetailsBlock from './DetailsBlock';
import CharacteristicsBlock from './CharacteristicsBlock';
import DeliveryBlock from './DeliveryBlock';
import PriceBlock from './PriceBlock';

import Divider from '../common/Divider';
import Heading from '../common/Heading';
import SizeBlock from './SizeBlock';
import CancelButton from '../common/CancelButton';
import Button from '../common/Button';

export interface Product {
  category: string;
  subcategory: string;
  subsubcategory: string;
  name: string;
  description: string;
  media: {
    main: any;
    other: any[];
  };
  fabric: string[];
  color: string;
  pattern: string;
  style: string;
  season: string;
  gender: string;
  characterictics: {
    text: string;
    // images: any[];
  };
  sizeCountry: string;
  sizeType: SizeType;
  sizes: string[][] | string[];
  poi: string;
  weight: string;
  price: string;
  discount: string;
}

export enum SizeType {
  none = '',
  single = 'single',
  range = 'range',
}

const initState = {
  category: '',
  subcategory: '',
  subsubcategory: '',
  name: '',
  description: '',
  media: {
    main: null,
    other: [null, null, null, null, null, null, null, null],
  },
  fabric: [],
  color: '',
  pattern: '',
  style: '',
  season: '',
  gender: '',
  characterictics: {
    text: '',
  },
  sizeCountry: '',
  sizeType: SizeType.none,
  sizes: [],
  poi: '',
  weight: '',
  price: '',
  discount: '',
};

const ProductLayout = () => {
  const router = useRouter();
  const [state, setState] = useState<Product>(initState);

  return (
    <div className={cx.wrapper}>
      <CancelButton onClick={() => router.push(EPagesRoutes.Stock)} />
      <Heading>добавить товар</Heading>
      <div className={cx.formWrapper}>
        <Divider direction="horizontal" />
        <MainBlock state={state} setState={setState} />

        <Divider direction="horizontal" />
        <MediaBlock state={state} setState={setState} />

        <Divider direction="horizontal" />
        <DetailsBlock state={state} setState={setState} />

        <Divider direction="horizontal" />
        <CharacteristicsBlock state={state} setState={setState} />

        <Divider direction="horizontal" />
        <SizeBlock state={state} setState={setState} />

        <Divider direction="horizontal" />
        <DeliveryBlock state={state} setState={setState} />

        <Divider direction="horizontal" />
        <PriceBlock state={state} setState={setState} />

        <Divider direction="horizontal" />
        <div className={cx.confirm}>
          <Button onClick={() => {}}>добавить товар на склад</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
