import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  icon: ReactNode;
  headingText: string;
  headingDescription: string;
  customCSS?: string;
};

export default function FinishOrderSection({
  children,
  icon,
  headingText,
  headingDescription,
  customCSS,
}: Props) {
  return (
    <section className={`bg-[#F3F2F2] rounded-md p-10 max-w-2xl ${customCSS}`}>
      <div className="flex gap-2 mb-8">
        <span>{icon}</span>

        <div>
          <h3 className="font-normal" style={{ fontFamily: 'Roboto' }}>
            {headingText}
          </h3>
          <p className="text-sm text-[#574F4D]">{headingDescription}</p>
        </div>
      </div>

      {children}
    </section>
  );
}
