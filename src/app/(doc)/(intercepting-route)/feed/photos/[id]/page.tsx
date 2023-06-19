import React from "react";
import { Photo } from "@/app/ui/Photo";
import swagPhotos from "@/app/static/photos";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = swagPhotos.find((p) => p.id === id);
  if (!photo) {
    return <div>no image</div>;
  }

  return (
    <div className="photo__container container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Photo photo={photo} />
      </div>
    </div>
  );
}
