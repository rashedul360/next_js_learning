/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React, { useState } from "react";
import Layout from "./layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";

const page = () => {
 // const pathName = usePathname();
 // const [count, setCOunt] = useState(0);
 // const router = useRouter();

 return (
  <>
   <Layout>
    <h1>dashboard page</h1>
    {/* <Link href={"/"} scroll={false}>
     home
    </Link> */}
    {/* <button type="button" onClick={() => router.push("/")}>
     go to home with router.push(){" "}
    </button> */}
   </Layout>
  </>
 );
};

export default page;
