import { useState, useMemo, useEffect } from 'react';

import { steps, AuthContext } from '@/components/Auth/context';
import Modal from '@/components/Auth/Modal';

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const AuthComponent = ({ visible, setVisible }: IProps) => {
  const [step, setStep] = useState(0);

  const onClose = () => {
    setVisible(false);
  };

  const incStep = () =>
    setStep((state) => {
      if (state + 1 < steps.length) {
        return state + 1;
      }
      return steps.length - 1;
    });

  const decStep = () =>
    setStep((state) => {
      if (state - 1 >= 0) {
        return state - 1;
      }
      return 0;
    });

  const toRegistration = () => {
    setStep(3);
  };

  const toAuth = () => {
    setStep(0);
  };

  const providerValue = useMemo(() => {
    return {
      incStep,
      decStep,
      onClose,
      toRegistration,
      toAuth,
      step,
    };
  }, [step, visible]);

  const CurrentStepComponent = steps[step];

  useEffect(() => {
    setStep(0);
  }, [visible]);

  return (
    <Modal visible={visible} onClose={() => setVisible(false)}>
      <AuthContext.Provider value={providerValue}>
        <CurrentStepComponent />
      </AuthContext.Provider>
    </Modal>
  );
};

export default AuthComponent;
