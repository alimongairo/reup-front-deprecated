import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { getIniDataLoading, getInitData } from '@/store/initData/selectors';
import { authAction } from '@/store/initData/thunk';

import cx from './index.module.scss';

const Home = () => {
  const dispatch = useAppDispatch();
  const dataSource = useAppSelector(getInitData);
  const loading = useAppSelector(getIniDataLoading);

  useEffect(() => {
    dispatch(authAction({ name: 'kasdjfksajdfj' }));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={`${cx.wrapper} container`}>
      <h1>{JSON.stringify(dataSource)}</h1>
    </div>
  );
};

export default Home;
