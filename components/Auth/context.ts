import { createContext } from 'react';

import EmailStep from '@/components/Auth/Steps/Email';
import CodeStep from '@/components/Auth/Steps/Code';
import Success from '@/components/Auth/Steps/Success';

export const steps = [EmailStep, CodeStep, Success];

interface IAuthContext {
  step: number;
  incStep: () => void;
  decStep: () => void;
}
export const AuthContext = createContext<IAuthContext | null>(null);
