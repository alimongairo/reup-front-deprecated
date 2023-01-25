import { useState, createContext, useMemo } from 'react';

import EmailStep from '@/components/Auth/Steps/Email';
import CodeStep from '@/components/Auth/Steps/Code';
import Success from '@/components/Auth/Steps/Success';

import cx from './index.module.scss';

const steps = [EmailStep, CodeStep, Success];

interface IAuthContext {
  step: number;
  incStep: () => void;
  decStep: () => void;
}
export const AuthContext = createContext<IAuthContext | null>(null);

const AuthComponent = () => {
  const [step, setStep] = useState(0);

  const incStep = () =>
    setStep((state) => {
      if (state + 1 <= steps.length) {
        return state + 1;
      }
      return 0;
    });

  const decStep = () =>
    setStep((state) => {
      if (state - 1 >= 0) {
        return state - 1;
      }
      return steps.length;
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
    <div className={cx.wrapper}>
      <AuthContext.Provider value={providerValue}>
        <CurrentStepComponent />
      </AuthContext.Provider>
    </div>
  );
};

export default AuthComponent;
