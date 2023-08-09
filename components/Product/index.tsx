import cx from './index.module.scss';

import Divider from '../common/Divider';
import Heading from '../common/Heading';
import MainBlock from './MainBlock';
import MediaBlock from './MediaBlock';
import DetailsBlock from './DetailsBlock';
import CharacteristicsBlock from './CharacteristicsBlock';
import SizeBlock from './SizeBlock';
import DeliveryBlock from './DeliveryBlock';
import PriceBlock from './PriceBlock';
import { useState } from 'react';

export interface Product {
  category: string;
  subcategory: string;
  subsubcategory: string;
  name: string;
  description: string;
  // media: any[];
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
  // sizes: string[];
  poi: string;
  weight: string;
  price: string;
  discount: string;
}

const initState = {
  category: '',
  subcategory: '',
  subsubcategory: '',
  name: '',
  description: '',
  fabric: [],
  color: '',
  pattern: '',
  style: '',
  season: '',
  gender: '',
  characterictics: {
    text: '',
  },
  poi: '',
  weight: '',
  price: '',
  discount: '',
};

const ProductLayout = () => {
  const [state, setState] = useState<Product>(initState);

  return (
    <div className={cx.wrapper}>
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
      </div>
    </div>
  );
};

export default ProductLayout;
