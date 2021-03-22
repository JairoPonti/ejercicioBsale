import React, { Component, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";




const Paginas = () => {

  // const [sig, setSig] = useState([]);
  // const [ant, setAnt] = useState([]);
  const [a, setA] = useState(7);
  const [b, setB] = useState(14);
  // const [c, setC] = useState(a);
  // const [d, setD] = useState(b);
  const [interruptor, setInterruptor] = useState(true);
  const dispatch = useDispatch();
  
  var productos = useSelector((store) => store.productos.array);
    
  // if(productos.length > 0){
  //   var prod =  productos.slice(0,7)
  // } else {
  //   prod = []
  // }

  

  var prod =  productos.slice(0,7)
  
  const [prodPaginacion, setProdpaginacion] = useState([])

  // if(prod.length !== 0 && prodPaginacion.length === 0){
  //   setA(7)
  //   setB(14)
  // }
 
  console.log( prod)
  console.log( prodPaginacion)

  const prodFiltrados = useSelector((store) => store.productos.resFiltrados);
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

  if (prodFiltrados.length > 0 && interruptor === false) {
    productos = false;
    leyenda = null;
  }

 


  console.log("Soy a y b del scoope global " + a + b);
  //  console.log ('Soy c y d del scoope global ' + c + d)

  function siguientes(productos) {
    setA(a + 7);
    setB(b + 7);
    prod = []
    console.log("Soy a y b dentro de f de sig " + a + b);
    setProdpaginacion (productos.slice(a, b));

    return prodPaginacion;
  }

  function anteriores(productos) {
    setA(a - 7);
    setB(b - 7);
    prod = []
    console.log("Soy a y b dentro de f anteriores " + a + b);
    setProdpaginacion (productos.slice(a, b));
    return prodPaginacion;
  }

  const handleSiguientes = () => {
    siguientes(productos);
    // setSig(prodPaginacion);
    setInterruptor(false);
    console.log("Ejecuté siguientes");
    // console.log(prodPaginacion);
  };

  const handleAnteriores = () => {
    anteriores(productos);
    // setAnt(prodPaginacion);
    console.log("Ejecuté Anteriores");
    // setInterruptor(false)
  };

  // useEffect(() => {
  //   console.log("Me rendericé");
  // }, [ant, handleAnteriores]);

  // console.log(sig);
  // console.log(ant);
  console.log(interruptor);

  return (
    <div>
       <div className="row">
        {prod && interruptor === true
          ? prod.map((e) => (
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
            : prodPaginacion.length > 0 && interruptor === false
            ? prodPaginacion.map((e) => (
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

        { a !== 0 ?
        ( <button
          className="btn active cyan darken-3"
          onClick={handleAnteriores} // PROBANDO CATEGORY
        >
          anteriores
        </button> )
        : null }
        { prod.length !== 0 ?
        (<button className="btn active cyan darken-3" onClick={handleSiguientes}>
          siguientes
        </button>)
        : leyenda}
      </div>
    </div>
  );
};

export default Paginas;
