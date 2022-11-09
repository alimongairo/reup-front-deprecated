import { useAppDispatch } from '@/hooks/store';

import MainLayout from "@/components/Main";

import cx from './index.module.scss';

const MainPage = () => {
  const dispatch = useAppDispatch();

  return <MainLayout/>
};

export default MainPage;
