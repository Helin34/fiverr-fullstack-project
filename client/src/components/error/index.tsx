import React, { type FC } from "react";

interface Props {
  message?: any;
  refetch?: () => void;
}

const Error: FC<Props> = ({ message, refetch }) => {
  // Gelen hatayı güvenli bir metne dönüştürelim
  let errorMessage = "Üzgünüz bir hata oluştu";

  if (typeof message === "string") {
    errorMessage = message;
  } else if (message && typeof message === "object") {
    errorMessage =
      message.message ||
      message.response?.data?.message ||
      JSON.stringify(message);
  }

  return (
    <div className="warning bg-red-500 text-white p-4 rounded-md my-5 flex flex-col gap-2">
      <p className="font-semibold">{errorMessage}</p>
      <p className="text-sm opacity-90">Lütfen daha sonra tekrar deneyin</p>
      {refetch && (
        <button
          onClick={refetch}
          className="mt-2 bg-white text-red-600 px-3 py-1 rounded w-fit text-sm font-medium cursor-pointer"
        >
          Tekrar Dene
        </button>
      )}
    </div>
  );
};

export default Error;
