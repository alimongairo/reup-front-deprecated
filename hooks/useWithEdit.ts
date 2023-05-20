import { ReactNode } from 'react';

interface IProps {
  editable: boolean;
  editComponent: ReactNode;
  disableComponent: ReactNode;
}

const useWithEdit = ({ editable, editComponent, disableComponent }: IProps) => {
  return editable ? editComponent : disableComponent;
};

export default useWithEdit;
