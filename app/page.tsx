"use client";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AdvertisingBanners from "./components/AdvertisingBanners";
import ProductList from "./components/ProductList";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main>
        <AdvertisingBanners />
        <ProductList />
      </main>
      <Navigation />
    </>
  );
}
