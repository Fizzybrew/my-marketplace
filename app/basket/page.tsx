import Link from 'next/link'
import Search from "../components/Search";

export default function Basket({ search, setSearch }) {
  return (
    <>
      <header className="p-5">
        <Search search={search} setSearch={setSearch} placeholder="Поиск товара"/>
      </header>
      <main className="px-5 py-4">
        <h1 className="text-xl font-bold mb-4">Корзина пуста</h1>
        <p>
          Воспользуйтесь поиском, чтобы найти всё, что нужно. Если в Корзине
          были товары, войдите, чтобы посмотреть список
        </p>
        <div className="flex flex-row gap-2 mt-5">
          <Link 
            href="/profile"
            className="px-4 py-3 cursor-pointer bg-purple-600/15 rounded-xl font-medium">
            Войти
          </Link>
          <Link
            href="/catalog"
            className="px-4 py-3 cursor-pointer bg-purple-600 rounded-xl text-white font-medium"
          >
            В каталог
          </Link>
        </div>
      </main>
    </>
  );
};

