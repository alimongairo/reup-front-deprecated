import { useMemo, useState } from 'react';

import { RegistrationContext, steps } from '@/components/Registration/context';

import cx from './index.module.scss';

// TODO refactoring
const RegistrationComponent = () => {
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
    <div className={cx.wrapper}>
      <RegistrationContext.Provider value={providerValue}>
        <CurrentStepComponent />
      </RegistrationContext.Provider>
    </div>
  );
};

export default RegistrationComponent;
