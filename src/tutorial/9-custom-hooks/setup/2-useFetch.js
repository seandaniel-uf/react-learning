import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    // response, and then JSON
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);

    // axios
    // const { data } = await axios.get(url);

    // console.log(data);
    // setProducts(data);
    // setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, products };
};
