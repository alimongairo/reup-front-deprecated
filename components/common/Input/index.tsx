import React, { HTMLInputTypeAttribute } from 'react';
import classNames from 'classnames';

import Text from '@/components/common/Text';
import CodeInput from '@/components/common/Input/CodeInput';

import cx from './index.module.scss';

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
  theme?: 'light' | 'grey';
  isTextArea?: boolean;
}

const Input = ({
  className,
  invalid,
  errorMessage,
  codeInput,
  label,
  theme = 'light',
  isTextArea,
  ...props
}: IProps) => {
  if (codeInput) {
    return <CodeInput {...props} />;
  }

  return (
    <>
      {label && <Text className={cx.label}>{label}</Text>}
      {isTextArea ? (
        <textarea
          className={classNames(className, cx.input, cx[theme], {
            [cx.invalid]: invalid,
          })}
          {...props}
        />
      ) : (
        <input
          className={classNames(className, cx.input, cx[theme], {
            [cx.invalid]: invalid,
          })}
          {...props}
        />
      )}

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
