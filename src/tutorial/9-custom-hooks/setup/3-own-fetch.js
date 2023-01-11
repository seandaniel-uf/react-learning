import { useFetch } from "./2-useFetch";

export const OwnFetch = () => {
  const url = "https://randomuser.me/api/";

  const { loading, products } = useFetch(url);
  return (
    <>
      <h1>{loading ? "loading" : "data"}</h1>
    </>
  );
};
