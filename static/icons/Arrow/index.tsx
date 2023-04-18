interface IProps {
  color?: 'black' | 'white';
}

export const Arrow = ({ color = 'white' }: IProps) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.99968 12.7344L22.707 12.7344"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M16.2347 4.96948L24 12.7347L16.2347 20.5"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="square"
      />
    </svg>
  );
};
