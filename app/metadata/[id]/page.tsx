import { Metadata, ResolvingMetadata } from "next";
import React from "react";
//===============================// metadata//====================================
// export const metadata: Metadata = {
//  title: "metadata",
//  description: "desc of metadata",
// };
//===============================// dynamic metadata//====================================
// type Props = {
//  params: { id: string };
//  searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata(
//  { params, searchParams }: Props,
//  parent?: ResolvingMetadata
// ): Promise<Metadata> {
//  // read route params
//  const id = params.id;

//  // fetch data
//  const product = await fetch(
//   `https://jsonplaceholder.typicode.com/todos/${id}`
//  ).then((res) => res.json());
//  // optionally access and extend (rather than replace) parent metadata

//  const previousImages = (await parent)?.openGraph?.images || [];

//  return {
//   title: product.title,
//   openGraph: {
//    images: ["/some-specific-page-image.jpg", ...previousImages],
//   },
//  };
// }

// =====
type Props = {
 params: { id: string };
};
export const generateMetadata = async ({ params }: Props) => {
 const userData = await fetch(
  `https://jsonplaceholder.typicode.com/users/${params.id}`
 );
 const photoData = await fetch(
  `https://jsonplaceholder.typicode.com/photos/${params.id}`
 );
 const user = await userData.json();
 const photo = await photoData.json();
 console.log(photo);
 return {
  title: user.name || "deep learning",
  description: params.id,
  openGraph: {
   images: [photo.url],
   title: photo.title || "photo title",
  },
  // Output:
  // <title>user.name</title>
  // <meta property="og:title" content={photo.title} />
 };
};
// =================================================================
const page = () => {
 return (
  <div>
   <h3 className="text-center text-2xl">metadata</h3>
  </div>
 );
};

export default page;
