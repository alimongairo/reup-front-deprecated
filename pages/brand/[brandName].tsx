import { useRouter } from 'next/router';

import MainLayout from '@/layouts/MainLayout';

import Scheme1 from '@/components/Brands/Scheme1';
import Scheme2 from '@/components/Brands/Scheme2';
import Scheme3 from '@/components/Brands/Scheme3';

const schemes = [<Scheme1 key={0} />, <Scheme2 key={1} />, <Scheme3 key={2} />];

const BrandPage = () => {
  const router = useRouter();
  const CurrentScheme = schemes[Number(router.query.schemeNum)];
  return <MainLayout>{CurrentScheme}</MainLayout>;
};

export default BrandPage;
