import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primarybg text-white flex flex-col items-center justify-center px-6 text-center">

      <div className="relative w-[300px] h-[300px] mb-6 rounded-xl overflow-hidden">
        <Image
          src="/notFound.jpg" // 👈 حط الصورة اللي هتولدها هنا
          alt="Not Found"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        404
      </h1>

      <p className="text-lg text-gray-400 mb-6 max-w-md">
        Oops! This page doesn’t exist or has been moved. Please check the URL or return to the homepage.
      </p>

      <Link
        href="/"
        className="bg-primary-container text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
      >
        🎥 Back to Home
      </Link>
    </div>
  );
}