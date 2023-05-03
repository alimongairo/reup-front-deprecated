import RecommendationsOrder from './RecommendationsOrder';
import TextCompleted from './TextCompleted';
import TitleOrder from './TitleOrder';
import cx from './index.module.scss';

const CompletedOrder = () => {
  return (
    <div className={cx.wrapper}>
      <TitleOrder />
      <TextCompleted />
      <div className={cx.recomendations}>
        <RecommendationsOrder />
      </div>
    </div>
  );
};

export default CompletedOrder;
