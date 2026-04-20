"use client";

export default function Search ({ search, setSearch, placeholder }) {
  return (
    <div className="relative w-full h-10">
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-full pl-10 pr-4 rounded-lg placeholder-fuchsia-500 bg-linear-to-r from-fuchsia-500/20 to-pink-600/20 outline-none"
        placeholder={placeholder}
      />
      <i className="fi fi-rs-search absolute left-3 top-1/2 -translate-y-1/2 text-fuchsia-500 font-bold flex items-center"></i>
      {search?.length >= 1 && (
        <button type="button" onClick={() => setSearch("")}>
          <i className="fi fi-bs-cross absolute right-3 top-1/2 -translate-y-1/2 text-fuchsia-500 font-bold flex items-center text-xs cursor-pointer"></i>
        </button>
      )}
    </div>
  );
};

