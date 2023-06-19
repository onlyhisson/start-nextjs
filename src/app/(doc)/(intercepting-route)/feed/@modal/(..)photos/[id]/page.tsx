import { Photo } from "@/app/ui/Photo";
import swagPhotos from "@/app/static/photos";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photos = swagPhotos;
  const photo = id && photos.find((p) => p.id === id);
  if (!photo) {
    return <div>no image</div>;
  }

  return (
    <div className="intercepter__container">
      <Photo photo={photo} />
    </div>
  );
}
