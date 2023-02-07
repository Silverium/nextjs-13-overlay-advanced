import ProgressBar from "@/components/ProgressBar";
export const dynamic = "force-dynamic";

import Lazy1000Segment from "@/components/Lazy1000Segment";
import Lazy2000Segment from "@/components/Lazy2000Segment";
import Lazy3000Segment from "@/components/Lazy3000Segment";
export default function Segmented() {
  return (
    <div>
      <h2>Segmented POC</h2>
      <p>
        In this POC, the three sections below are lazy components with different
        timing to be resolved, all of them belonging to the current page, all of
        them SSR
      </p>
      <ProgressBar time={3000} />
      <Lazy1000Segment />
      <Lazy3000Segment />
      <Lazy2000Segment />
    </div>
  );
}
