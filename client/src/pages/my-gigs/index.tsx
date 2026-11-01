import React, { type FC } from "react";
import { useProfile } from "../../service/auth";
import { useGetAllGigs } from "../../service/gig";
import Loader from "../../components/loader";
import Card from "../../components/card";
import Error from "../../components/error";
// Eksik olan Error bileşeni eklendi

const MyGigs: FC = () => {
  const { user } = useProfile();
  const { isLoading, error, data, refetch } = useGetAllGigs({
    userId: user?.id,
  });

  return (
    <div className="p-5">
      <h1 className="title">Hizmetlerim</h1>
      <div>
        {isLoading ? (
          <Loader designs="my-40" />
        ) : error ? (
          <Error
            refetch={refetch}
            message={
              error instanceof Error ? error?.message : "Bir hata oluştu"
            }
          />
        ) : (
          <div className="layout">
            {data?.length === 0 ? (
              <div className="text-center my-40 font-semibold">
                <p className="font-semibold">
                  Henüz oluşturduğunuz bir hizmet yok
                </p>
              </div>
            ) : (
              data?.map((item) => (
                <Card key={item.id} item={item} expand={true} />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyGigs;
