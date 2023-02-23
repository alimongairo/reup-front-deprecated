import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from 'react';
import classNames from 'classnames';

import Text from '@/components/common/Text';

import cx from './index.module.scss';
import CodeInput from '@/components/common/Input/CodeInput';

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: HTMLInputTypeAttribute;
  codeInput?: boolean;
  invalid?: boolean;
  label?: string;
  errorMessage?: string;
}

const Input = ({
  className,
  invalid,
  errorMessage,
  codeInput,
  label,
  ...props
}: IProps) => {
  if (codeInput) {
    return <CodeInput {...props} />;
  }

  return (
    <>
      {label && <Text className={cx.label}>{label}</Text>}
      <input
        className={classNames(className, cx.input, { [cx.invalid]: invalid })}
        {...props}
      />
      {errorMessage && (
        <Text
          className={classNames(
            { [cx.visibleError]: invalid },
            cx.errorMessage,
          )}
        >
          {errorMessage}
        </Text>
      )}
    </>
  );
};

export default Input;
