/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";

async function getTodos() {
 const todoS = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .catch((err) => console.log(err));
 return todoS;
}

const page = async ({ params }: { params: { productId: string } }) => {
 const [id, _setId] = useState(params.productId);
 useEffect(() => {
  if (parseInt(id) < 100) {
   for (let index = 0; index <= parseInt(id); index++) {
    console.log(`${id} times loop exicure`);
   }
  }
 }, [id]);
 const todoS = await getTodos();

 const data = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .catch((err) => console.error(err));
 // type definitions for for every single post
 type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
 };
 const posts: Post[] = await data;

 return (
  <div>
   <h3>dynamic route for product {id}</h3>
   <br />
   <h1>{posts.length} posts found</h1>
   <div style={{ marginTop: "100px" }}>
    {todoS.map((todo: { title: string; id: number }, index: number) => (
     <div key={index}>
      {todo.title} {todo.id}
     </div>
    ))}
   </div>
  </div>
 );
};

export default page;
