import Container from '@/components/Brands/Menu/Container';
import Options from '@/components/Brands/Menu/EditText/Options';
import { MenuContext } from '@/components/Brands/Menu/helpers';
import { useContext } from 'react';

const EditText = () => {
  const menuContext = useContext(MenuContext);

  return (
    <Container title="добавить текст" onBack={menuContext?.toHome}>
      <Options />
    </Container>
  );
};

export default EditText;
