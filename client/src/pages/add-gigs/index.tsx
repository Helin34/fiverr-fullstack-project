import React, { type FC, type FormEvent } from "react";
import { gigInputs } from "../../utils/constants";
import Field from "../../components/form/field";
import { useCreateGig } from "../../service/gig";

const AddGig: FC = () => {
  const { isPending, mutate } = useCreateGig();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // KONTROL İÇİN BU SATIRLARI EKLEYELİM:
    console.log("--- FORM DATA İÇERİĞİ ---");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    mutate(formData);
  };

  return (
    <div className="container p-5 max-w-3xl mx-auto pt-24">
      <h1 className="title mb-8">Yeni Hizmet Oluştur</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {gigInputs.map((item) => (
          <Field key={item.name} {...item} />
        ))}

        <button
          disabled={isPending}
          type="submit"
          className="form-button mt-4 bg-green-600"
        >
          {isPending ? "Yükleniyor..." : "Hizmeti Oluştur"}
        </button>
      </form>
    </div>
  );
};

export default AddGig;
