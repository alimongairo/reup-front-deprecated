import cx from './index.module.scss';

const AnchorComponent = ({ id }: { id: string }) => {
  return <div className={cx.anchor} id={id} />;
};

export default AnchorComponent;
