import React, { Component, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  siguientesProductos,
  anterioresProductos,
} from "../redux/searchDucks";




const Paginas = () => {

  const [interruptor, setInterruptor] = useState(true);
  const [prodPaginacion, setProdpaginacion] = useState([])
  console.log( prodPaginacion)
  const dispatch = useDispatch();
  
  var productos = useSelector((store) => store.productos.array);
  var indexA =   useSelector((store) => store.productos.min);
  var indexB=     useSelector((store) => store.productos.max);
    
  var prodFiltrados = productos.slice(0,7)
  
  console.log (prodFiltrados)
  // const prodFiltrados = useSelector((store) => store.productos.resFiltrados);
  //  console.log(prodFiltrados);
  const value = useSelector((store) => store.productos.value);
  // console.log(value);

  var val = "2";
  async function categorySearch() {
    try {
      const res = await axios.get(
        `http://localhost:4000/search/category?q=${val}`
      );
      console.log(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  var leyenda = (
    <h3 style={{ textAlign: "center", marginTop: "140px" }}>
      Tu búsqueda aparecerá aquí
    </h3>
  );

  var leyendaSinProductos = (
    <h3 style={{ textAlign: "center", marginTop: "140px" }}>
      No hay más productos para mostrar
    </h3>
  );

  // var tecla = false

  // if (prodIniciales){
  //   tecla = true  
  // }

  // if(tecla){
  //   dispatch(siguientesProductos())
  //   tecla = false
  // }
  
  // useEffect(() => {
  //   dispatch(siguientesProductos())
  // }, [prodIniciales])

  // switch (prodIniciales.length > 0) {

  //   case true:

  //     dispatch(siguientesProductos())

  //   break;
  // }
 
  function siguientesYanteriores(productos) {
   
    console.log('dentro de siguientes y ant' + indexA + indexB)
    prodFiltrados = (productos.slice(indexA, indexB));
     console.log('soy algo dentro de f' + prodFiltrados)
    return prodFiltrados;
  }

  console.log(siguientesYanteriores(productos))
 
  // function anteriores(productos) {
   
  //   return prodPaginacion;
  // }

  const handleSiguientes = () => {
    dispatch(siguientesProductos());
    siguientesYanteriores(productos)
    // console.log( prodIniciales)
    // setSig(prodPaginacion);
    setInterruptor(false);
    console.log("Ejecuté siguientes");
    // console.log(prodPaginacion);
  };

  const handleAnteriores = () => {
    dispatch(anterioresProductos());
    siguientesYanteriores(productos)
    // setAnt(prodPaginacion);
    console.log("Ejecuté Anteriores");
    // setInterruptor(false)
  };

  console.log(interruptor);

  return (
    <div>
       <div className="row">
        { prodFiltrados.length > 0 
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
            : null} 
         </div> 

      <div style={{ textAlign: "center", position: "sticky" }}>

        { indexA !== 0 ?
        (   <button
          className="btn active cyan darken-3"
          onClick={handleAnteriores} // PROBANDO CATEGORY
        >
          anteriores
        </button> )
        : null } 
      {prodFiltrados.length !== 0 ?
        ( 
        <button className="btn active cyan darken-3" onClick={handleSiguientes}>
          siguientes
        </button>
         )
        : leyendaSinProductos} 
      </div>
    </div>
  );
};

export default Paginas;
