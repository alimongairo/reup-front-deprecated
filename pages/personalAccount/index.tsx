import MainLayout from '@/layouts/MainLayout';

import PersonalAccount from '@/components/PersonalAccount';
import SubHeaderLK from '@/components/SubHeaderLK';

const PersonalAccountPage = () => {
  return (
    <MainLayout>
      <SubHeaderLK />
      <PersonalAccount />
    </MainLayout>
  );
};

export default PersonalAccountPage;
