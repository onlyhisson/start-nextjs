"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log("############################");
    //console.log(error);
    console.log(error.message);
    console.log("############################");
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!!!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
