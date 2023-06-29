"use client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/app/store";
import { decrement, increment } from "./redux/features/slices/counterSlice";

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
 // ==============================// state redux//================================
 const { count } = useSelector((state: RootState) => state.counter);
 const dispatch = useDispatch();
 // ==============================// state redux//================================
 return (
  <>
   <h3>hello</h3>
   <h3 className="text-red-600">redux counter state count value {count}</h3>
   <button
    className="btn bg-red-500 rounded-full p-2 mx-2 text-white"
    onClick={() => dispatch(increment({ payload: 0 }))}
   >
    Increment
   </button>
   <button
    className="btn bg-red-500 rounded-full p-2 mx-2 text-white"
    disabled={count === 0}
    onClick={() => dispatch(decrement({ payload: 0 }))}
   >
    Decrement
   </button>
   <Link href={"/about"} className="text-cyan-500">
    about
   </Link>
   <Link href={"/1"} className="text-cyan-500">
    dynamic route and see data from server with generateStaticParams
   </Link>
   <hr />
   <Link href={"/counter"} className="text-cyan-500">
    go to counter page
   </Link>

   {/* <Image
    src="https://i.ibb.co/Pr7gfMq/Screenshot-3-removebg-preview.png"
    alt="logo web"
    width={500}
    height={400}
    priority
   /> */}
   <Image
    // loader={imageLoader}
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
