import { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("No Product Found, Come Back Soon !");
      }
      const products = await response.json();

      setProducts(products);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setLoading(false);
  };
  return (
    <>
      <h1 className="main_title">Store Myanmar</h1>
      {isLoading && <h1>Loading Products</h1>}
      <section className="flex-ctr">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      {isError && <h3>{isError}</h3>}
    </>
  );
}

export default App;
