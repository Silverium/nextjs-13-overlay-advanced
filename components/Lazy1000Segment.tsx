import { Suspense } from "react";
import ProgressBar from "@/components/ProgressBar";
import Segment1000 from "@/components/Segment1000";

export const dynamic = "force-dynamic";
export default function LazySegmented() {
  return (
    <Suspense fallback={<ProgressBar time={1000} />}>
      {/* @ts-expect-error Server Component */}
      <Segment1000 />
    </Suspense>
  );
}
