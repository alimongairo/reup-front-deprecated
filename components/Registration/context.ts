import { createContext } from 'react';

import NameFields from '@/components/Registration/NameFields';
import RegistrationCode from '@/components/Registration/Code';
import SuccessRegistration from '@/components/Registration/Success';

interface IRegistrationContext {
  step: number;
  incStep: () => void;
  decStep: () => void;
}

export const RegistrationContext = createContext<IRegistrationContext | null>(
  null,
);

export const steps = [NameFields, RegistrationCode, SuccessRegistration];
