import Search from "../components/Search";
import CategoryList from "../components/CategoryList.jsx";

export default function Catalog ({ search, setSearch }) {
  const categoryList = [
    {
      id: 1,
      name: "Одежда",
      svgUrl: "fi fi-sr-tshirt",
    },
    {
      id: 2,
      name: "Обувь",
      svgUrl: "fi fi-ss-shoe-prints",
    },
    {
      id: 3,
      name: "Аксессуары",
      svgUrl: "fi fi-ss-umbrella",
    },
    {
      id: 4,
      name: "Электроника",
      svgUrl: "fi fi-rr-mobile-button",
    },
    {
      id: 5,
      name: "Игрушки",
      svgUrl: "fi fi-ss-gamepad",
    },
    {
      id: 6,
      name: "Спорт",
      svgUrl: "fi fi-ss-gym",
    },
    {
      id: 7,
      name: "Книги",
      svgUrl: "fi fi-ss-book",
    },
    {
      id: 8,
      name: "Красота",
      svgUrl: "fi fi-ss-spa",
    },
    {
      id: 9,
      name: "Здоровье",
      svgUrl: "fi fi-rs-stethoscope",
    },
    {
      id: 10,
      name: "Дом и сад",
      svgUrl: "fi fi-ss-home",
    },
    {
      id: 11,
      name: "Автотовары",
      svgUrl: "fi fi-ss-car",
    },
    {
      id: 12,
      name: "Детям",
      svgUrl: "fi fi-ss-baby-carriage",
    },
    {
      id: 13,
      name: "Продукты",
      svgUrl: "fi fi-ss-apple-whole",
    },
    {
      id: 14,
      name: "Мебель",
      svgUrl: "fi fi-ss-couch",
    },
    {
      id: 15,
      name: "Зоотовары",
      svgUrl: "fi fi-ss-paw",
    },
    {
      id: 16,
      name: "Канцелярия",
      svgUrl: "fi fi-ss-journal-alt",
    },
    {
      id: 17,
      name: "Музыка",
      svgUrl: "fi fi-ss-headphones",
    },
    {
      id: 18,
      name: "Фото и видео",
      svgUrl: "fi fi-ss-camera",
    },
    {
      id: 19,
      name: "Часы",
      svgUrl: "fi fi-ss-clock",
    },
    {
      id: 20,
      name: "Сумки",
      svgUrl: "ffi fi-sr-shopping-bag",
    },
    {
      id: 21,
      name: "Бижутерия",
      svgUrl: "fi fi-ss-gem",
    },
    {
      id: 22,
      name: "Сувениры",
      svgUrl: "fi fi-ss-gift",
    },
    {
      id: 23,
      name: "Оружие",
      svgUrl: "fi fi-rr-raygun",
    },
    {
      id: 24,
      name: "Инструменты",
      svgUrl: "fi fi-ss-tools",
    },
    {
      id: 25,
      name: "Ремонт",
      svgUrl: "fi fi-ss-paint-roller",
    },
    {
      id: 26,
      name: "Офис",
      svgUrl: "fi fi-rs-chair-office",
    },
    {
      id: 27,
      name: "Путешествия",
      svgUrl: "fi fi-ss-passport",
    },
    {
      id: 28,
      name: "Свадьба",
      svgUrl: "fi fi-ss-ring",
    },
    {
      id: 29,
      name: "Подарки",
      svgUrl: "fi fi-ss-gift-card",
    },
    {
      id: 30,
      name: "Распродажа",
      svgUrl: "fi fi-sr-badge-percent",
    },
  ];

  return (
    <>
      <header className="p-5">
        <Search search={search} setSearch={setSearch} placeholder="Искать категорию"/>
      </header>
      <main className="pb-5">
        <CategoryList categories={categoryList} />
      </main>
    </>
  );
};


