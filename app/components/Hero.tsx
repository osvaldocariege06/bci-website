import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-175 relative overflow-hidden">
      <Image
        src={"/images/hero-image-2x.png"}
        alt="Next.js logo"
        width={1440}
        height={700}
        priority
      />

      <div className="w-82 h-16 z-40 absolute left-1/2 bottom-6 -translate-x-1/2 -translate-y-1/2 bg-[#091A18] rounded-[20px] p-4 flex items-center justify-between">
        <button className="active:scale-90 transition-all cursor-pointer">
          <ArrowLeftIcon color="#FFF" />
        </button>

        <div className="flex gap-2 items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#FDEAF3] cursor-pointer border hover:border-[#E72A87]/50 transition-all active:scale-90" />
          <div className="w-6 h-6 rounded-full bg-[#FDEAF3] cursor-pointer border hover:border-[#E72A87]/50 transition-all active:scale-90" />
          <div className="w-6 h-6 rounded-full bg-[#E72A87] cursor-pointer border hover:border-[#E72A87]/50 transition-all active:scale-90" />
          <div className="w-6 h-6 rounded-full bg-[#FDEAF3] cursor-pointer border hover:border-[#E72A87]/50 transition-all active:scale-90" />
          <div className="w-6 h-6 rounded-full bg-[#FDEAF3] cursor-pointer border hover:border-[#E72A87]/50 transition-all active:scale-90" />
        </div>

        <button className="active:scale-90 transition-all cursor-pointer">
          <ArrowRightIcon color="#FFF" />
        </button>
      </div>
    </div>
  );
}
