import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <nav className="w-full p-4 flex justify-between items-center bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">Sarthak</h1>
        <div>
          <Link href="#projects" className="mx-2 hover:underline">
            Projects
          </Link>
          <Link href="#contact" className="mx-2 hover:underline">
            Contact
          </Link>
        </div>
      </nav>

      <header className="text-center my-16">
        <h2 className="text-4xl font-bold">
          Hi, I&apos;m Sarthak Lav Chaudhary
        </h2>
        <p className="text-lg mt-4">
          A Software Engineer specializing in react, javascript, typescript.
        </p>
      </header>

      <section id="projects" className="w-3/4 my-16">
        <h3 className="text-3xl font-semibold">Projects</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Project</h4>
            <p className="mt-2">Listing soon... Loading...</p>
            <a
              href="#"
              className="text-blue-400 hover:underline mt-2 inline-block"
            >
              View Project
            </a>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Project</h4>
            <p className="mt-2">Listing soon... Loading...</p>
            <a
              href="#"
              className="text-blue-400 hover:underline mt-2 inline-block"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="w-3/4 my-16">
        <h3 className="text-3xl font-semibold">Contact Me</h3>
        <p className="mt-1">Email: lavsarthak@gmail.com</p>
        <p className="mt-1">Email: sarthakchaudhary52@gmail.com</p>
        <p className="mt-2">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sarthaklav/"
            className="text-blue-400 hover:underline"
          >
            https://www.linkedin.com/in/sarthaklav/
          </a>
        </p>
      </section>
    </div>
  );
}
