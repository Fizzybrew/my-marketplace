import Search from "../components/Search";

interface FavouritesProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function Favourites({ search, setSearch }: FavouritesProps) {
  return (
    <>
      <header className="p-5">
        <Search search={search} setSearch={setSearch} placeholder="Ищите любимый товар"/>
      </header>
      <main className="px-5 py-4">
        <h1 className="text-xl font-bold mb-4">Избранное</h1>
        <p className="text-lg font-semibold mb-1">В избранном пока пусто</p>
        <p>
          Добавляйте товары с помощью сердешка, чтобы не потерять их и купить
          позже
        </p>
      </main>    
    </>
  );
};

