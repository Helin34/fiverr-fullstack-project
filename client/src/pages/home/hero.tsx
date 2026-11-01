import React, { type FC, type FormEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Hero: FC = () => {
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
    <div className="bg-dark-green  h-[40vh] text-white p-5 md:p-12 md:rounded-md flex flex-col justify-center items-center md:mt-10">
      <div className="max-w-150">
        <h1 className="text-4xl md:text-5xl font-light md:text-center">
          Profesyonel iş gücünüzü <span>freelancer'larla</span> ölçeklendirin
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-md w-full flex gap-5 mt-10"
        >
          <input
            name="search"
            type="text"
            className="flex-1 p-2 px-3 rounded-md text-black
           outline-none"
            placeholder="hizmet ara..."
          />
          <button type="submit" className="bg-dark-green m-1 p-2 rounded-md">
            <IoSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
