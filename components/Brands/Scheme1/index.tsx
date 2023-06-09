import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import BrandPage from '@/components/Brands/Scheme1/BrandPage';
import EditableScheme from '@/components/Brands/Scheme1/EditableScheme';

import useWithEdit from '@/hooks/useWithEdit';

const Scheme1 = () => {
  const router = useRouter();
  const isEditable = router.query.editable === 'true';

  const Component = useWithEdit({
    editable: isEditable,
    disableComponent: <BrandPage />,
    editComponent: <EditableScheme />,
  });

  return <div>{Component}</div>;
};

export default Scheme1;
