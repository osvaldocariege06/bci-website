import { ChevronDownIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BCILogo from "../assets/svgs/BCILogo";

export default function Header() {
  return (
    <div className="h-30.75 w-full flex justify-between items-center px-24 fixed top-0 z-50 bg-white">
      <Link href={"/"}>
        <BCILogo />
      </Link>
      <div className="flex gap-8 flex-wrap">
        <Link
          href={"/"}
          className="py-2 font-medium text-[#E72A87] border-b border-[#E72A87]"
        >
          Particulares
        </Link>
        <Link href={"/"} className="py-2 font-medium">
          Empresas
        </Link>
        <Link href={"/"} className="py-2 font-medium">
          Institucional
        </Link>
        <Link href={"/"} className="py-2 font-medium">
          Parcerias
        </Link>
        <Link href={"/"} className="py-2 font-medium">
          TV BCI
        </Link>
      </div>
      <div className="flex gap-6">
        <div className="flex  items-center max-w-62.5 w-full active:outline-1 outline-gray-300 bg-[#F9FAFA] justify-center gap-2 border rounded-[20px] h-14 px-4 border-[#E3E3E3]">
          <SearchIcon color="#5F5E5F" size={16} />
          <input
            type="text"
            placeholder="Pesquisa aqui..."
            className="outline-0 border-0"
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-1 items-center justify-center">
            <Image
              src={"/images/pt-flag.png"}
              alt="PT Flag"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-sm">PT</span>
          </div>
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
}
