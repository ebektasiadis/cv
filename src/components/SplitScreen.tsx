import { ReactElement } from "react";

interface ISplitScreenProps {
  left: ReactElement;
  right: ReactElement;
}

function SplitScreen({ left, right }: ISplitScreenProps) {
  return (
    <div className="max-w-[1280px] mx-auto px-10 py-10 flex-grow">
      <div className="grid md:grid-cols-splitscreen md:gap-x-5 md:h-full">
        {left}
        <div className="md:border-lightgray border-l mx-auto"></div>
        {right}
      </div>
    </div>
  );
}

export default SplitScreen;
