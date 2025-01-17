import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <Image
        src="/your-photo.jpg"
        alt="Srinivas Naik"
        width={200}
        height={200}
        className="rounded-full mb-8"
        priority
      />
      <h1 className="text-4xl font-bold mb-4">
        Hi, I&apos;m Srinivas Naik
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Software Developer | Tech Enthusiast
      </p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/naiksrinivas"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/srinivaslaxmannaik/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
