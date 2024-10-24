import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <main className="max-w-screen-xl mx-auto border-x border-neutral/10 mt-16">
      <section className="p-4 flex flex-col gap-4 items-center min-h-screen">
        <h2>Not Found</h2>
        <Image
          src="/notfound-image.jpg"
          alt="notfound image"
          width={400}
          height={300}
        />
        <p>Could not find requested resource</p>

        <Link href="/" className="bg-primary text-neutral p-1 rounded-md">
          go back to home
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
