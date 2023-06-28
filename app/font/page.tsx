// import { Fira_Code, Inter } from "next/font/google";

import { inter, roboto_mono, fire_code } from "../font";

import React from "react";

// If loading a variable font, you don't need to specify the font weight
// const inter = Fira_Code({
//  subsets: ["latin"],
//  display: "swap",
// });
const page = () => {
 return (
  <div className={fire_code.className}>
   {/* // <div className={roboto_mono.variable}> */}
   <h3 className="text-2xl">{`10 === 10 -> true`}</h3>
  </div>
 );
};

export default page;
