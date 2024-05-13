'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav({children}) {
  return <nav className="w-[353px] h-5 flex gap-10 items-center">
    {children}
  </nav>
}

export function NavLink(props){
  const path = usePathname();
  console.log(props)
  return <Link {...props} className={`text-base hover:font-bold text-[#705A5A] ${path === props.href && 'font-bold text-selected'}`}/>
}