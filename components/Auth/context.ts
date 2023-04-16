import { createContext } from 'react';

import EmailStep from '@/components/Auth/Steps/Email';
import CodeStep from '@/components/Auth/Steps/Code';
import Success from '@/components/Auth/Steps/Success';
import NameFields from '@/components/Auth/Steps/NameFields';
import RegistrationCode from '@/components/Auth/Steps/RegistrationCode';
import SuccessRegistration from '@/components/Auth/Steps/RegistrationSuccess';

export const steps = [
  EmailStep,
  CodeStep,
  Success,
  NameFields,
  RegistrationCode,
  SuccessRegistration,
];

interface IAuthContext {
  step: number;
  incStep: () => void;
  decStep: () => void;
  onClose: () => void;
  toRegistration: () => void;
  toAuth: () => void;
}
export const AuthContext = createContext<IAuthContext | null>(null);
