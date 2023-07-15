import classNames from 'classnames';

interface IProps {
  className?: string;
}

const FreelanceForm = ({ className }: IProps) => {
  return <div className={classNames(className)}>FreelanceForm</div>;
};

export default FreelanceForm;
