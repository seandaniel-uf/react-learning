import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";
import { OwnFetch } from "./3-own-fetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  // custom hook name which always begins with use
  const { loading, products } = useFetch(url);
  // const { loading, products } = useFetch()

  return (
    <>
      <div>
        <h2>{loading ? "loading..." : "data"}</h2>
      </div>
      <OwnFetch />
    </>
  );
};

export default Example;
