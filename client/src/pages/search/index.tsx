import React, { type FC } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetAllGigs } from "../../service/gig";
import Title from "./title";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";

const Search: FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const category = searchParams.get("category");

  const params = {
    category,
    search: query,
  };
  const { isLoading, error, data, refetch } = useGetAllGigs(params);

  return (
    <div className="container max-sm:p-5 py-5">
      <Title {...params} />
      {isLoading ? (
        <Loader designs="my-40" />
      ) : error ? (
        <Error message={error.message} refetch={refetch} />
      ) : (
        <div className="layout">
          {data?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
