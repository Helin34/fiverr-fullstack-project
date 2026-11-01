import React, { type FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full border-t p-5 border-bs-zinc-100 shadow-sm">
      <p className="max text-center text-zinc-800">
        Tüm Hakları Saklıdır &copy;{new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
