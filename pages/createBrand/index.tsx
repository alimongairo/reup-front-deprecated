import Heading from '@/components/common/Heading';
import CreateBrandLayout from '@/components/CreateBrand';

import MainLayout from '@/layouts/MainLayout';

import cx from './index.module.scss';

const CreateBrandPage = () => {
  return (
    <MainLayout>
      <Heading className={cx.header}>страница бренда</Heading>
      <CreateBrandLayout />
    </MainLayout>
  );
};

export default CreateBrandPage;
