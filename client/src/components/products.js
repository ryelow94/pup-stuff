import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/record");
      setProducts(result.data);
    };
    fetchData();
  }, [products]);

  return (
    <div>
        <h4>Products:</h4>
      {products.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.person_name}</p>
          </div>
        );
      })}
    </div>
  );
}
