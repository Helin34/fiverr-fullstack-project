import React, { type FC } from "react";
import type { FilterParams } from "../../types";

const Title: FC<FilterParams> = ({ search, category }) => {
  return (
    <div>
      {search ? (
        <p>
          <span className="font-bold">{search}</span> için arama sonuçları
        </p>
      ) : category ? (
        <p>
          <span className="font-bold">{category}</span> kategorisi için sonuçlar
        </p>
      ) : (
        <p className="">Tüm Sonuçlar</p>
      )}
    </div>
  );
};

export default Title;
