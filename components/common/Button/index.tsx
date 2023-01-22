import React from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import cx from './index.module.scss';

interface IProps {
  small?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children?: ReactNode;
  isSelected?: boolean;
  className?: string;
  onClickFunc?: () => void;
}

const Button = ({
  small,
  type = 'button',
  children,
  isSelected,
  className,
  onClickFunc,
}: IProps) => {
  return (
    <button
      type={type}
      className={classNames(
        cx.classicButton,
        isSelected && cx.selected,
        small && cx.small,
        className,
      )}
      onClick={onClickFunc}
    >
      {children}
    </button>
  );
};

export default Button;
