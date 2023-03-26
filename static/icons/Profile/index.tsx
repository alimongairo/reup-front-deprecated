import cx from './index.module.scss';

interface IProps {
  active: boolean;
}

const ProfileSvg = ({ active }: IProps) => {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx.wrapper}
    >
      <path
        d="M20.9987 21.5V19.2778C20.9987 18.099 20.4939 16.9686 19.5952 16.1351C18.6966 15.3016 17.4779 14.8333 16.207 14.8333H6.6237C5.35287 14.8333 4.13409 15.3016 3.23548 16.1351C2.33687 16.9686 1.83203 18.099 1.83203 19.2778V21.5M16.207 5.94444C16.207 8.39904 14.0617 10.3889 11.4154 10.3889C8.769 10.3889 6.6237 8.39904 6.6237 5.94444C6.6237 3.48985 8.769 1.5 11.4154 1.5C14.0617 1.5 16.207 3.48985 16.207 5.94444Z"
        stroke={active ? '#7991F5' : 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileSvg;
