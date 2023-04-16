import Collapse from '@/components/common/Collapse';

import cx from '@/components/common/FiltersForProducts/index.module.scss';

const Style = () => {
  return (
    <div className={cx.filterItem}>
      <Collapse title="стиль" content={<div>хуиль</div>} />
    </div>
  );
};

export default Style;
