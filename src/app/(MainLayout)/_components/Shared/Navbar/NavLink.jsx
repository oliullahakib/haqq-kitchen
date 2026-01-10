'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export default function NavLink({ href, children }) {
  const pathname = usePathname(); 
  const isActive = pathname === href; 
  const baseClasses = ' px-4 py-2 rounded-lg transition-colors duration-150';
  const activeClasses = 'bg-orange-400 text-white font-bold shadow-md'; 
  const inactiveClasses = 'text-white '; 

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {children}
    </Link>
  );
}