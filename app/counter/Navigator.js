import { usePathname } from "next/navigation";
import React from "react";

const Navigator = () => {
 const pathname = usePathname();
 console.log(pathname);

 return <div></div>;
};

export default Navigator;
