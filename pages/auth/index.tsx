import AuthComponent from '@/components/Auth';
import LoginLayout from '@/hoc/LoginLayout';

const AuthPage = () => {
  return (
    <LoginLayout>
      <AuthComponent />
    </LoginLayout>
  );
};

export default AuthPage;
