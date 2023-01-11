import { useState, useEffect } from "react";

// always use, returns values
export const useFetch = (url) => {
  const [loading, isLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    // promise
    const response = await fetch(url);
    // response which we turn into JSON
    const products = await response.json();

    setProducts(products);

    // fetch(url).then((res) => {
    //   res.json().then((data) => {
    //     console.log(data);
    //   });
    // });
    console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  console.log(loading, products);

  return { loading, products };
};
