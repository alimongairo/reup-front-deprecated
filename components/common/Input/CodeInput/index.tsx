import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';

import cx from '../index.module.scss';
import classNames from 'classnames';

interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const CodeInput = ({ onChange, ...props }: IProps) => {
  const [codes, setCodes] = useState(['', '', '', '']);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id'));
    const value = event.target.value;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (!value && index >= 1) {
      const prevInput = document.getElementById(String(index - 1));
      prevInput?.focus();
      return;
    }
    const nextInput = document.getElementById(String(index + 1));
    if (nextInput) {
      nextInput.focus();
    }
  };

  useEffect(() => {
    const firstElement = document.getElementById('0');
    firstElement?.focus();
  }, []);

  return (
    <div className={classNames(cx.input)}>
      {codes.map((code, index) => {
        return (
          <>
            <input
              key={index}
              className={cx.codeInput}
              maxLength={1}
              id={String(index)}
              onChange={handleChangeInput}
              value={code}
              autoComplete="off"
            />
            {index !== codes.length - 1 && ' - '}
          </>
        );
      })}
    </div>
  );
};

export default CodeInput;
