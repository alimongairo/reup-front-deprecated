import classNames from 'classnames';

interface IProps {
  className?: string;
}

const CorporateForm = ({ className }: IProps) => {
  return <div className={classNames(className)}>CorporateForm</div>;
};

export default CorporateForm;
