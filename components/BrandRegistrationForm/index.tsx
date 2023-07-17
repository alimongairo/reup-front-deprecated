import classNames from 'classnames';
import Input from '@/components/common/Input';
import { LegacyRef } from 'react';

interface IField {
  name: string;
  label: string;
}

interface IProps {
  className?: string;
  formRef: LegacyRef<HTMLFormElement> | undefined;
  fields: IField[];
}

const BrandRegistrationForm = ({ className, formRef, fields }: IProps) => {
  return (
    <div className={classNames(className)}>
      <form ref={formRef}>
        {fields.map((item) => (
          <Input
            key={item.name}
            label={item.label}
            name={item.name}
            isWrapped
          />
        ))}
      </form>
    </div>
  );
};

export default BrandRegistrationForm;
