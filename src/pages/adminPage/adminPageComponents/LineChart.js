import { useState } from "react";
import MultiType from "./ChartZoom/MultiType";

export default function LineChart() {
  const [stateValue, setStateValue] = useState("relevance");
  return (
    <div className="bg-secondary rounded-xl">
      <div>
        <h4 className="bg-[#fdb82c] font-medium md:font-bold md:text-xl py-5 relative rounded-full text-center text-[#fff] text-xs top-[-55px] uppercase">
          Overview of Visitor
        </h4>
        <h2 className="text-white text-3xl text-center capitalize">
          {stateValue}
        </h2>
      </div>
      <div>
        <div className="relative h-96">
          <MultiType setFirst={setStateValue} />
        </div>
      </div>
    </div>
  );
}
