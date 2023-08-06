import { ReactNode } from 'react';
import './index.css';

type Props = {
  children: ReactNode;
  customBackground?: boolean;
  customCSS?: string;
};

export default function Wrapper({
  children,
  customBackground,
  customCSS,
}: Props) {
  const customBackgroundStyles: string = !customBackground
    ? 'px-6 md:px-40'
    : '';
  const customCSSStyles: string = customCSS ?? '';

  return (
    <div
      className={`${customBackgroundStyles} ${customCSSStyles} mx-auto max-w-[90rem] w-full relative`.trim()}
    >
      {customBackground && <div className="colorful-background"></div>}
      {children}
    </div>
  );
}
