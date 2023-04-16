import cx from './index.module.scss';

interface IProps {
  direction?: 'left' | 'right';
}

const MoreArrowSvg = ({ direction = 'right' }: IProps) => {
  switch (direction) {
    case 'right':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="121"
          height="18"
          viewBox="0 0 121 18"
          fill="none"
          className={cx.svg}
        >
          <line y1="0.5" x2="120" y2="0.5" />
          <line
            y1="-0.5"
            x2="48.3793"
            y2="-0.5"
            transform="matrix(-0.936229 0.35139 -0.128789 -0.991672 120 0)"
          />
        </svg>
      );
    case 'left':
      return (
        <svg
          width="121"
          height="18"
          viewBox="0 0 121 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cx.svg}
        >
          <line
            y1="-0.5"
            x2="120"
            y2="-0.5"
            transform="matrix(-1 0 0 1 121 1)"
          />
          <line
            y1="-0.5"
            x2="48.3793"
            y2="-0.5"
            transform="matrix(0.936229 0.35139 0.128789 -0.991672 1 0)"
          />
        </svg>
      );
  }
};

export default MoreArrowSvg;
