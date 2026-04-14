import Image from "next/image";

export default function OurMobile() {
  return (
    <div className="px-24 mt-16 w-full f">
      <div className=" relative  w-full lex items-center gap-15.75 rounded-[20px] h-137.25 bg-linear-to-l from-[#FDEAF3] to-[#F9FAFA] flex">
        <div className="mt-12.75 relative">
          <Image
            src={"/images/mobile-mock.png"}
            alt="Next.js logo"
            width={600}
            height={642}
            priority
            className="relative -top-24"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-[48px] font-bold leading-16 tracking-tight">
              O seu <span className="text-[#E72A87]">Banco</span>. No seu{" "}
              <span className="text-[#E72A87]">Smartphone</span>. Sempre.
            </h2>
            <span className="max-w-90 text-lg w-full">
              Leve o seu banco para qualquer lugar! Disponível para{" "}
              <span className="font-bold">Android e iOS.</span>
            </span>
          </div>

          <div className="flex justify-start gap-4 items-center">
            <Image
              src={"/images/avatars.png"}
              alt="Next.js logo"
              width={86}
              height={28}
              priority
            />
            <span className="">
              <span className="font-bold text-[#E72A87]">+100M</span> pessoas
              usam o app
            </span>
          </div>

          <div className="flex gap-4 items-center">
            <button className="bg-black rounded-lg active:scale-95 transition-transform cursor-pointer">
              <Image
                src={"/images/button-google-play.png"}
                alt="Next.js logo"
                width={130}
                height={39}
                priority
              />
            </button>
            <button className="bg-black rounded-lg active:scale-95 transition-transform cursor-pointer">
              <Image
                src={"/images/button-app-store.png"}
                alt="Next.js logo"
                width={130}
                height={39}
                priority
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
