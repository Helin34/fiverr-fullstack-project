import React, { type FC, type FormEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchForm: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form elemanına güvenli bir şekilde erişelim
    const form = e.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    const text = input?.value.trim();

    if (!text) return;
    navigate(`/search?query=${text}`);
  };

  return (
    <form
      onSubmit={handleSubmit} // Düzeltme: onClick yerine onSubmit kullanıldı
      className="flex-1 flex border rounded overflow-hidden max-w-125 border-zinc-300 shadow-sm"
    >
      <input
        type="text"
        name="search"
        placeholder="hizmet ara..."
        className="w-full h-full px-3 py-1 outline-none" // size-full yerine w-full h-full daha güvenlidir
      />
      <button
        type="submit"
        className="bg-black p-2 text-white text-xl max-sm:hidden cursor-pointer"
      >
        <IoSearch />
      </button>
    </form>
  );
};

export default SearchForm;
