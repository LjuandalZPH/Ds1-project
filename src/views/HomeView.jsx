import Banner from "@/components/Home/Banner/Banner";
import Products from "@/components/Home/Products/Products";
import Search from "@/components/NavBar/Search/Search";
import Deals from "@/components/Home/Products/Deals/Deals";
import TopProducts from "@/components/Home/Products/TopProducts/TopProducts";
import Benefits from "@/components/Home/Benefits/Benefits";
import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";
import React, { useState, useEffect } from "react";

function HomeView({ searchTerm }) {
  let { store } = useGlobalContext(); // Acceso al contexto global
  let [filteredProducts, setFilteredProducts] = useState(store.state.products); // Estado local para productos filtrados

  useEffect(() => {
    handleSearch(searchTerm); // Filtra los productos cuando searchTerm cambia
  }, [searchTerm]);
  
  const handleSearch = (searchTerm) => {
    
    console.log("SEARCH:",searchTerm);
    if (searchTerm=="") {
      // Si no hay término de búsqueda, muestra todos los productos
      setFilteredProducts(store.state.products);
      return;
    }
    // Filtra los productos según el término de búsqueda
    const filteredProducts = store.state.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };
  return (
    <div>
      <main>
        <section className="hero-section">
          <Banner></Banner>
        </section>
        <section className="benefits-section"></section>
        
        {/* <section className="filters-section">
          <Filters></Filters>
        </section> */}
        <section>
          <Benefits></Benefits>
        </section>
        <section className="products-section">
        <Products products={filteredProducts} />
        </section>
       
       
      </main>
    </div>
  );
}

export default HomeView;
