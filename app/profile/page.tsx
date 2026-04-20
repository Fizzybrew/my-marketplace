"use client";

import Link from "next/link";
import PhoneInputAdvanced from "../components/PhoneInputAdvanced";

export default function Profile() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <header className="bg-linear-to-r from-fuchsia-500/70 to-pink-600/70 h-15 flex justify-center items-center fixed top-0 left-0 w-full z-50">
        <h1 className="font-bold text-white text-2xl">FIZZY ID</h1>
      </header>

      <main className="p-4 mt-20 grow flex flex-col items-center">
        <h2 className="text-xl font-bold mb-5 mt-10">
          Войти или создать профиль
        </h2>
        <PhoneInputAdvanced />
        <button
          type="button"
          className="w-72 py-3 bg-purple-600 rounded-xl text-white font-medium mt-3 hover:bg-purple-700 transition-colors"
        >
          Получить код
        </button>
        <p className="text-center w-72 mt-5 text-[12px] leading-tight text-gray-500">
          Нажимая на кнопку, я соглашаюсь с{" "}
          <u>правилами пользования торговой площадкой</u> и{" "}
          <u>Политикой конфиденциальности</u>
        </p>
      </main>
      <footer className="absolute bottom-24 right-4">
        <Link
          href="/support"
          className="flex flex-row gap-2 items-center justify-center bg-purple-600 text-white px-4 py-3 rounded-xl shadow-2xl"
        >
          <span className="font-medium">Поддержка</span>
          <i className="fi fi-sr-user-headset flex items-center text-2xl"></i>
        </Link>
      </footer>
    </div>
  );
}
