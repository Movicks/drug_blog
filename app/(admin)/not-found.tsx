import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <Image src={ErrorImage} alt="404 image" /> */}

      <Link
        href="/"
        className="hover:bg-blue-500 border border-blue-500 transistion-all duration-300 rounded-lg text-black hover:text-white px-6 py-2"
      >
        Return Home
      </Link>
    </div>
  );
}