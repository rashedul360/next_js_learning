"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 const imageLoader = ({
  src,
  width,
  quality,
 }: {
  src: string;
  width: number;
  quality: number;
 }): string => {
  return `https://i.ibb.co/Pr7gfMq/${src}?w=${width || 500}&q=${quality || 75}`;
 };
 return (
  <>
   <h3>hello</h3>
   <Link href={"/1"}>
    dynamic route and see data from server with generateStaticParams
   </Link>
   {/* <Image
    src="https://i.ibb.co/Pr7gfMq/Screenshot-3-removebg-preview.png"
    alt="logo web"
    width={500}
    height={400}
    priority
   /> */}
   <Image
    loader={imageLoader}
    src="Screenshot-3-removebg-preview.png"
    alt="logo web"
    // fill={true}
    width={500}
    height={500}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    quality={10} // {number 1-100}
    // priority={false} // {false} | {true} When true, the image will be considered high priority and preload.
    blurDataURL="https://i.ibb.co/MsfkGYk/personal-poerfolio.png"
    placeholder="blur"
    onLoadingComplete={() => console.log("loading complete")}
    // onLoad={(e) => console.log(e.target.naturalWidth)}
    // onError={(e) => console.error(e.target.id)}
    // unoptimized={false} // {false} | {true}
    loading="lazy"
   />
  </>
 );
}
