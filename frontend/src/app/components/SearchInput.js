import Image from "next/image";
import svg from "../../assets/search.svg";

export default function SearchInput({
  setTexto,
  texto,
  funcaoPesquisa,
  placeholder,
  buttonSize,
  inpputSize,
  children,
  ...props
}) {
  return (
    <label htmlFor="" className="relative">
      <input
        type="text"
        className={`${inpputSize} rounded-full pl-[20px]`}
        placeholder={placeholder}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        {...props}
      />
      <button
        className={`bg-[#373E52] ${buttonSize} rounded-full flex items-center justify-center absolute`}
        onClick={() => funcaoPesquisa()}
      >
        <Image src={svg} alt="search" width="36.2" height="28" />
      </button>
      {children}
    </label>
  );
}
