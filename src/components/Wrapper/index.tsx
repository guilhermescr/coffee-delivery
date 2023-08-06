import { ReactNode } from 'react';
import './index.css';

type Props = {
  children: ReactNode;
  customBackground?: boolean;
};

export default function Wrapper({ children, customBackground }: Props) {
  const customBackgroundStyles: string = !customBackground
    ? 'px-6 md:px-40'
    : '';

  return (
    <div
      className={`${customBackgroundStyles} mx-auto max-w-[90rem] w-full relative`.trim()}
    >
      {customBackground && <div className="colorful-background"></div>}
      {children}
    </div>
  );
}
