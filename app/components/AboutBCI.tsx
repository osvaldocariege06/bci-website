import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import BCIIconSvg from "../assets/svgs/BCIIconSvg";
export default function AboutBCI() {
  return (
    <div className="w-fit px-24 py-18.25">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#E72A87]" />
        <h4>Sobre o BCI</h4>
      </div>
      <h2 className="font-bold text-[40px]">A confiança do BCI em números</h2>

      <div className="mt-8 flex gap-4">
        <div className="row-span-2 h-141.5 w-202.5 rounded-[20px] overflow-hidden relative">
          <Image
            src={"/images/agencies-image.png"}
            alt="Next.js logo"
            width={810}
            height={566}
            priority
          />
          <div className="w-100 h-71 bg-white rounded-[20px] flex-col gap-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-8 flex justify-center items-center">
            <span className="font-bold text-[48px] text-center">
              +50 Agências
            </span>
            <span className="text-center text-[24px] leading-normal">
              Em todo o país, uma rede próxima de si.
            </span>
            <button className="bg-[#E72A87] text-white rounded-lg h-14 w-full justify-center py-3 flex items-center gap-2 hover:bg-[#d91e78] transition-all active:scale-95 cursor-pointer">
              Conhecer agências
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-105.5 h-68.75 rounded-[20px] bg-linear-to-l from-[#FDEAF3] to-[#F9FAFA] flex items-center gap-6 justify-center flex-col">
            <BCIIconSvg />
            <div className="flex gap-4 flex-col">
              <span className="text-[48px] text-center font-bold">
                Há 34 anos
              </span>
              <span className="text-[24px] text-center">
                de experiência no mercado
              </span>
            </div>
          </div>
          <div className="w-105.5 h-68.75 rounded-[20px] bg-[#163E39] flex items-center gap-6 justify-center flex-col">
            <div className="flex gap-4 flex-col">
              <span className="text-[48px] text-center text-white font-bold">
                <span className="text-[#E72A87] mr-2">+</span>
                2milhões
              </span>
              <span className="text-[24px] text-center text-white">
                Clientes atendidos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
