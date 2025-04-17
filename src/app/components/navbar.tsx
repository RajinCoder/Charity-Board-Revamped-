import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-sky-600 w-screen h-20 flex items-center justify-between px-4 shadow-md">
      <Link href="/home" className="text-xl font-semibold">
        CharityConnect
      </Link>
      <ul className="hidden md:flex gap-4 text-white">
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}
