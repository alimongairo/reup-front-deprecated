import LoginLayout from '@/hoc/LoginLayout';
import RegistrationComponent from '@/components/Registration';

const RegistrationPage = () => {
  return (
    <LoginLayout>
      <RegistrationComponent />
    </LoginLayout>
  );
};

export default RegistrationPage;
