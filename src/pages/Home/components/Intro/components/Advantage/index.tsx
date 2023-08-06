import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  backgroundColor: string;
  advantageDescription: string;
};

export default function Advantage({
  children,
  backgroundColor = '#545454',
  advantageDescription,
}: Props) {
  return (
    <div className="advantage flex gap-3 items-center">
      <span
        className="flex items-center justify-center p-2 text-white rounded-[62.5rem]"
        style={{ backgroundColor }}
      >
        {children}
      </span>{' '}
      {advantageDescription}
    </div>
  );
}
