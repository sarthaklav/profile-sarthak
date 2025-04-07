import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <div className="md:flex">
      {/* <div className="mb-5 md:w-56"> */}
      {/* <Image
            src={dedeard}
            alt="Foto dede ariansya"
            className="block w-full"
            placeholder="blur"
          /> */}
      {/* </div> */}
      <div className="md:flex-1 md:pl-6 justify-start">
        <h2 className="mb-2 text-xl font-bold">I’m Sarthak Lav Chaudhary</h2>
        <div className="mb-6">
          <p className="mb-1">
            Software Engineer based in Noida, India. <br />I try my best to
            write maintanable code which is easy to read and understand.
          </p>
        </div>
        <h2 className="mb-2 text-xl font-bold">Tech i love</h2>
        <div className="mb-6">
          <p className="mb-1">
            TypeScript, Javascript, React, React-Native, Node.js, CSS.
          </p>
        </div>
        <div className="w-1/2 mb-1 flex items-center justify-between gap-1 p-2 mr-2 bg-white text-black">
          <div className="flex-4">
            <a
              download
              target="_blank"
              rel="nofollow"
              href={
                "//drive.google.com/file/d/1ReNOtc1-2bvIqJzNMbr9bmOhMrE07Z0J/view?usp=sharing"
              }
              className="mr-3 inline-block px-5 py-3 "
            >
              Find My Resume
            </a>
          </div>
          <div className="flex-1">
            <FiDownload size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
