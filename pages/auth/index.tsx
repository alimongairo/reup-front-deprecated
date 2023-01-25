import LoginLayout from '@/hoc/LoginLayout';
import AuthComponent from '@/components/Auth';

const AuthPage = () => {
  return (
    <LoginLayout>
      <AuthComponent />
    </LoginLayout>
  );
};

export default AuthPage;
