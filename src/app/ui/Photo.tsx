import Image from "next/image";

type TPhoto = {
  id: string;
  name: string;
  href: string;
  username: string;
  imageSrc: string;
};

export function Photo({ photo }: { photo: TPhoto }) {
  if (photo === undefined) {
    return <div>no image</div>;
  }
  return (
    <Image
      src={photo.imageSrc}
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
}
