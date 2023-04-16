import CollectionCard from '@/components/common/CollectionCard';

import collectionImg from '@/static/img/collection1.png';

import cx from './index.module.scss';

const collectionCardProps = {
  img: collectionImg,
  title: 'название коллекции',
  brand: 'бренд',
};

const Collections = () => {
  return (
    <div className={cx.wrapper}>
      <CollectionCard id={1} {...collectionCardProps} />
      <CollectionCard id={2} {...collectionCardProps} />
      <CollectionCard id={3} {...collectionCardProps} />
      <CollectionCard id={4} {...collectionCardProps} />
    </div>
  );
};

export default Collections;
