import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  backgroundColor: string;
  advantageDescription: string;
};

export default function Advantage({
  children,
  backgroundColor,
  advantageDescription,
}: Props) {
  const advantageIconStyles: string = `bg-[${backgroundColor}] flex items-center justify-center p-2 text-white rounded-[62.5rem]`;

  return (
    <div className="advantage flex gap-3 items-center">
      <span className={advantageIconStyles}>{children}</span>{' '}
      {advantageDescription}
    </div>
  );
}
