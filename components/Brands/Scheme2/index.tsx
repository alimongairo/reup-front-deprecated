import React from 'react';
import { useRouter } from 'next/router';

import BrandPage from '@/components/Brands/Scheme2/BrandPage';
import EditableScheme from '@/components/Brands/Scheme2/EditableScheme';

import useWithEdit from '@/hooks/useWithEdit';

const Scheme2 = () => {
  const router = useRouter();
  const isEditable = router.query.editable === 'true';

  const component = useWithEdit({
    editable: isEditable,
    disableComponent: <BrandPage />,
    editComponent: <EditableScheme />,
  });

  return <div>{component}</div>;
};

export default Scheme2;
