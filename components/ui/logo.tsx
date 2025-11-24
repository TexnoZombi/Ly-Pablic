import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className=" flex flex-1 gap-2 items-center shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={32} height={32} />
      <span className="text-17 bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">Ly-Public</span>
    </Link>
  );
}
