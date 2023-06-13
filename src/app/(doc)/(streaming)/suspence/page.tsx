/**
 * https://react.dev/reference/react/Suspense
 * https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#example
 */

import { Suspense } from "react";

export default function SuspencePage() {
  return (
    <>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className="post-feed">Post Feed</div>
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <div className="weather">Whether....</div>
      </Suspense>
    </>
  );
}
