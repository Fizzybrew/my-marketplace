"use client";

import Search from './Search';
import { useState, useEffect } from 'react';

export default function Header({ search, setSearch }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]); 

  return (
    <header className={`flex flex-row justify-between items-center gap-4 border-b border-black/10 z-50 h-15 rounded-b-3xl p-4 fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${
      show ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <p className="text-fuchsia-500 font-bold">FIZZY</p>
      <Search search={search} setSearch={setSearch} placeholder={"Поиск"}/>
    </header>
  );
};

