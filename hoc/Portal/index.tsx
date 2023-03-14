import ReactDOM from 'react-dom';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface IProps {
  children: ReactNode;
}

const Portal = ({ children }: IProps) => {
  const ref = useRef<Element | DocumentFragment | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    ref.current = document.getElementById('portal');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? ReactDOM.createPortal(
        <div onClick={(event) => event.stopPropagation()}>{children}</div>,
        ref.current,
      )
    : null;
};

export default Portal;
