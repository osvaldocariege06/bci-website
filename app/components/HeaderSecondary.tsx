import UploadSvg from "../assets/svgs/UploadSvg";

export default function HeaderSecondary() {
  return (
    <div className="bg-[#163E39] w-full flex justify-between items-center px-24 py-8 mt-30.75">
      <div className="flex gap-8 items-center">
        <button className="text-white bg-white/40 py-2 px-4 rounded-2xl active:scale-95 transition-transform cursor-pointer">
          Conta à ordem
        </button>
        <button className="text-white cursor-pointer">Pacotes</button>
        <button className="text-white cursor-pointer">Crédito</button>
        <button className="text-white cursor-pointer">Serviços</button>
        <button className="text-white cursor-pointer">Cartões</button>
        <button className="text-white cursor-pointer">Seguros</button>
        <button className="text-white cursor-pointer">
          Contatos e balcões
        </button>
      </div>
      <button className="flex items-center gap-2 text-white bg-[#E72A87] py-2 px-4 rounded-2xl active:scale-95 transition-all cursor-pointer h-13 hover:bg-[#e72a87]/90 font-medium">
        <UploadSvg width={16} height={16} />
        Baixar app BCI
      </button>
    </div>
  );
}
