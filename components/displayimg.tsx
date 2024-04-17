import Image from "next/image";

export default function DisplayImage({ src, alt }) {
  return (
    <div>
      <Image src={src} alt={alt} />
      <div>{alt}</div>
    </div>
  );
}
