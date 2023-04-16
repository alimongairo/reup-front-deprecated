import MainLayout from '@/layouts/MainLayout';

import Scheme2 from '@/components/Brands/Scheme2';
import Scheme3 from '@/components/Brands/Scheme3';

const schemeType = 1;
const schemes = [0, <Scheme2 key={1} />, <Scheme3 key={2} />];

const BrandPage = () => {
  const CurrentScheme = schemes[schemeType];
  return <MainLayout>{CurrentScheme}</MainLayout>;
};

export default BrandPage;
