import editar from "../../assets/editar.svg";
import lixeira from "../../assets/lixeira.svg";
import Image from "next/image";

export default function CardInfo({ children, edit, excluir, currEdit }) {
  return (
    <div className="bg-[#373E5273] w-[300px] h-[320px] rounded-[20px] relative">
      <button
        className="absolute top-4 right-5"
        onClick={() => edit(!currEdit)}
      >
        <Image src={editar} alt="" width={24} height={24} />
      </button>
      <button className="absolute top-4 right-12" onClick={excluir}>
        <Image src={lixeira} alt="" width={24} height={24} />
      </button>
      {children}
    </div>
  );
}
