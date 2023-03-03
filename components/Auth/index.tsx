import { useState, useMemo } from 'react';

import { steps, AuthContext } from '@/components/Auth/context';
import Modal from '@/components/Auth/Modal';

const AuthComponent = () => {
  const [step, setStep] = useState(0);

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

  const providerValue = useMemo(() => {
    return {
      incStep,
      decStep,
      step,
    };
  }, [step]);

  const CurrentStepComponent = steps[step];

  return (
    <AuthContext.Provider value={providerValue}>
      <CurrentStepComponent />
    </AuthContext.Provider>
  );
};

export default AuthComponent;
