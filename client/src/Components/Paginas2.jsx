import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { siguientesProductos, anterioresProductos } from "../redux/searchDucks";


const Paginas = () => {


  const [interruptor, setInterruptor] = useState(true);

  const dispatch = useDispatch();

  var productos = useSelector((store) => store.productos.array);
  var indexA = useSelector((store) => store.productos.min);
  var indexB = useSelector((store) => store.productos.max);

  var prodFiltrados = productos.slice(0, 7);

  
  var leyendaTuBusqueda = (
    <h3 style={{ textAlign: "center", marginTop: "140px" }}>
      Tu búsqueda aparecerá aquí
    </h3>
  );

  var leyendaSinProductos = (
    <h3 style={{ textAlign: "center", marginTop: "140px" }}>
      No hay más productos para mostrar
    </h3>
  );

  function siguientesYanteriores(productos) {
    console.log("dentro de siguientes y ant" + indexA + indexB);
    prodFiltrados = productos.slice(indexA, indexB);
    console.log("soy algo dentro de f" + prodFiltrados);
    return prodFiltrados;
  }

  console.log(siguientesYanteriores(productos));
   console.log(productos)

  const handleSiguientes = () => {
    dispatch(siguientesProductos());
    siguientesYanteriores(productos);
    setInterruptor(false);
    console.log("Ejecuté siguientes");
  };

  const handleAnteriores = () => {
    dispatch(anterioresProductos());
    siguientesYanteriores(productos);
    console.log("Ejecuté Anteriores");
  };

  console.log(interruptor);

  return (
    <div>
      <div className="row" style={{maxWidth: 1200, position: "sticky"}}>
        {prodFiltrados.length > 0
          ? prodFiltrados.map((e) => (
              <div className="col s13 m6 l4 " key={e.id}>
                <ProductCard
                  img={e.url_image}
                  title={e.name}
                  price={e.price}
                  discount={e.discount}
                  id={e.id}
                />
              </div>
            ))
          : prodFiltrados.length === 0 && interruptor === false
          ? leyendaSinProductos
          : leyendaTuBusqueda}
      </div>

      <div style={{ textAlign: "center",justifyContent: "center", alignItems: "flex-end", flexDirection: "center"}}>
        {indexA !== 0 ? (
          <button 
            className="btn active cyan darken-3"
            onClick={handleAnteriores}
          >
            anteriores
          </button>
        ) : null}
        {prodFiltrados.length !== 0 ? (
          <button 
            className="btn active cyan darken-3"
            onClick={handleSiguientes}
          >
            siguientes
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Paginas;
