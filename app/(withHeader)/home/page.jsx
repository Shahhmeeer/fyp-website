"use client";
import { Suspense, useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/app/firebase";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = ref(database, "products");
    get(productsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setProducts(productsArray);
        } else {
          console.log("There is no data");
        }
      })
      .catch((error) => {
        console.log("there was an error: ", error);
      });
  }, []);
  return (
    <main>
      <h1 className="text-center py-4 font-bold text-green-700 text-3xl">Products</h1>
      <div className="grid grid-cols-3 gap-4 mx-4">
        {products.map((product, index) => (
          <ProductCard key={index} productName={product.title} productDescription={product.description} productPrice={product.price} />
        ))}
      </div>
    </main>
  );
}
