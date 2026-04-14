import Link from "next/link";
import BCIIconSvg from "../assets/svgs/BCIIconSvg";

export default function About() {
  return (
    <div className="grid grid-cols-3 px-24 py-11 bg-[#F9FAFA]">
      <div className="flex flex-col gap-6 justify-center items-center border-r border-[#E3E3E3]">
        <BCIIconSvg />
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[24px] text-center">
            Descubra mais sobre o BCI
          </span>
          <p className="text-center">
            Conheça a nossa história, valores e soluções financeiras.
          </p>
          <Link
            href={"/"}
            className="underline text-center text-[#E72A87] -mt-2"
          >
            Ver mais
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center border-r border-[#E3E3E3]">
        <BCIIconSvg />
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[24px] text-center">
            Conta Poupança MONAMI
          </span>
          <p className="text-center">
            Uma conta pensada para poupar com segurança e simplicidade.
          </p>
          <Link
            href={"/"}
            className="underline text-center text-[#E72A87] -mt-2"
          >
            Ver mais
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center ">
        <BCIIconSvg />
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[24px] text-center">
            Relatórios e Contas
          </span>
          <p className="text-center">
            Consulte relatórios financeiros e informações institucionais.
          </p>
          <Link
            href={"/"}
            className="underline text-center text-[#E72A87] -mt-2"
          >
            Ver mais
          </Link>
        </div>
      </div>
    </div>
  );
}
