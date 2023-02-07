import { Suspense } from "react";
import ProgressBar from "@/components/ProgressBar";
import Segment3000 from "@/components/Segment3000";

export default function LazySegmented() {
  return (
    <Suspense fallback={<ProgressBar time={3000} />}>
      {/* @ts-expect-error Server Component */}
      <Segment3000 />
    </Suspense>
  );
}
