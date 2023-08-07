import { useRouter } from 'next/router';

import BrandPage from '@/components/Brands/Scheme3/BrandPage';
import EditableScheme from '@/components/Brands/Scheme3/EditableScheme';

import useWithEdit from '@/hooks/useWithEdit';

const Scheme3 = () => {
  const router = useRouter();
  const isEditable = router.query.editable === 'true';

  const Component = useWithEdit({
    editable: isEditable,
    disableComponent: <BrandPage />,
    editComponent: <EditableScheme />,
  });

  return <div>{Component}</div>;
};

export default Scheme3;
