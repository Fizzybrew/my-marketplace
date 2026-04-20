"use client"; 

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export default function Navigation() {
  const pathname = usePathname(); 

  const miniButton = [
    { id: 1, name: "home", path: "/", svgUrl: "fi fi-rr-home" },  
    { id: 2, name: "catalog", path: "/catalog", svgUrl: "fi fi-rr-list" },
    { id: 3, name: "basket", path: "/basket", svgUrl: "fi fi-rr-shopping-cart" },
    { id: 4, name: "favourites", path: "/favourites", svgUrl: "fi fi-rr-heart" },
    { id: 5, name: "profile", path: "/profile", svgUrl: "fi fi-rr-user" },
  ];

  return (
    <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[95%] max-w-md h-14 flex items-center bg-white border border-black/10 rounded-2xl shadow-lg z-50">
      <ul className="flex flex-row justify-between items-center w-full px-2">
        {miniButton.map((btn) => {
          const isActive = pathname === btn.path;
          return (
            <li key={btn.id} className="flex-1">
              <Link
                href={btn.path}
                className={`flex flex-col items-center justify-center w-full h-full py-1 cursor-pointer transition-colors ${
                  isActive ? 'text-fuchsia-500' : 'text-slate-400' 
                }`}
              >
                <i className={`${btn.svgUrl} text-xl flex items-center justify-center`}></i>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

