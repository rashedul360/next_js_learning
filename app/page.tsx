import Image from "next/image";
import Link from "next/link";

export default function Home() {
 return (
  <>
   <h3>hello</h3>
   <Link href={"/1"}>
    dynamic route and see data from server with generateStaticParams
   </Link>
   <Image
    src="https://i.ibb.co/Pr7gfMq/Screenshot-3-removebg-preview.png"
    alt="logo web"
    width={500}
    height={400}
    priority
   />
  </>
 );
}
