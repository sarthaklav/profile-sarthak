import React from "react";
import About from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <header className="text-center my-16">
        <div className="relative flex min-h-full w-full flex-col items-center justify-center">
          <div className="relative flex items-center justify-center py-3">
            <h1 className="relative flex-1">
              <span className="grid grid-cols-2">
                <span className="block text-center text-sm opacity-90">
                  Hello World ! {"      "} I AM
                </span>
              </span>{" "}
              <span className=" z-10 block text-[calc(1.825rem+6.9vw)] font-bold leading-none">
                Sarthak
              </span>
            </h1>
          </div>
        </div>
      </header>
      <About />

      <section id="contact" className="w-3/4 my-16">
        <h3 className="text-3xl font-semibold">Contact Me</h3>
        <p className="mt-1">Email: lavsarthak@gmail.com</p>
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
