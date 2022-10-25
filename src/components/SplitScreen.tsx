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
        <div className="border-lightgray border-b md:border-l md:mx-auto pb-5 mb-5 md:pb-0 md:mb-0"></div>
        {right}
      </div>
    </div>
  );
}

export default SplitScreen;
