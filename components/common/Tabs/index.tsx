import { ReactNode, useState } from 'react';
import classNames from 'classnames';
import Text from 'components/common/Text';

import cx from './index.module.scss';

interface IProps {
  tabs: { id: number; title: string | ReactNode; content: ReactNode }[];
  activeTab?: number;
  setActiveTab?: (activeTab: number) => void;
}

// TODO отрефакторить, добавить кеширование

const Tabs = ({ tabs, activeTab, setActiveTab }: IProps) => {
  const [active, setActive] = useState(activeTab || tabs[0].id);

  const onTitleClick = (id: number) => {
    setActive(id);
    if (setActiveTab) {
      setActiveTab(id);
    }
  };

  return (
    <div>
      <div className={cx.tabsTitle}>
        {tabs.map((item) => {
          return (
            <div
              key={item.id}
              className={classNames(
                { [cx.active]: item.id === active },
                cx.tabTitle,
              )}
              onClick={() => onTitleClick(item.id)}
            >
              <Text size={'big'}>{item.title}</Text>
            </div>
          );
        })}
      </div>
      <div className={cx.tabContent}>
        {tabs.find((item) => item.id === active)?.content}
      </div>
    </div>
  );
};

export default Tabs;
