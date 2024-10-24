import React from "react";

type BlogsProps = {
  params: { content: string };
};

function Blogs({ params }: BlogsProps) {
  return <div>Blogs {params.content}</div>;
}

export default Blogs;
