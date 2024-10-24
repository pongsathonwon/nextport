import React from "react";

type BlogsProps = {
  params: { content: string };
};

function Blogs({ params }: BlogsProps) {
  return (
    <main className="max-w-screen-xl mx-auto border-x border-neutral/10 mt-16">
      content
    </main>
  );
}

export default Blogs;
