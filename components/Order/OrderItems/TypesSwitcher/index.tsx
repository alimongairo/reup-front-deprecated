import React from 'react';
import Button from '@/components/common/Button';
import cx from './index.module.scss';

interface IProps {
  swithedTypes: any[];
  selectedType: any;
  buttonInnerText: string[];
  switcherFunc: (...args: any[]) => any;
}

const TypesSwitcher = ({
  swithedTypes,
  selectedType,
  buttonInnerText,
  switcherFunc,
}: IProps) => {
  return (
    <div className={cx.wrapper}>
      {swithedTypes.map((type, index) => {
        return (
          <Button
            onClickFunc={switcherFunc}
            funcArgs={type}
            isSelected={selectedType === type}
            key={type + index}
          >
            {buttonInnerText[index]}
          </Button>
        );
      })}
    </div>
  );
};

export default React.memo(TypesSwitcher);
