import { RootState } from 'store';

export const getUserDataSource = (state: RootState) => state.user.dataSource;

export const getUserErrLoading = (state: RootState) => {
  return {
    loading: state.user.loading,
    error: state.user.error,
  };
};
