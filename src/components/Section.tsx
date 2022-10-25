import { ReactElement } from "react";

interface ISectionProps {
  header: string;
  children: ReactElement;
}

function Section({ header, children }: ISectionProps) {
  return (
    <div>
      <p className="pb-5 text-3xl">{header}</p>
      {children}
    </div>
  );
}

export default Section;
