import { useRouter } from 'next/router';

import MainLayout from '@/layouts/MainLayout';
import SubHeaderLK from '@/components/SubHeaderLK';
import ReturnItemLayout from '@/components/Returns/ReturnItem';

const ReturnItem = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout>
      <SubHeaderLK />
      <ReturnItemLayout />
    </MainLayout>
  );
};

export default ReturnItem;
