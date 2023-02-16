import { Suspense } from "react";
import ProgressBar from "@/components/ProgressBar";
import Segment2000 from "@/components/Segment2000";

export default function LazySegmented() {
  return (
    <Suspense fallback={<ProgressBar time={2000} />}>
      {/* @ts-expect-error Server Component */}
      <Segment2000 />
    </Suspense>
  );
}
