import React, { Component, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerProductos,
  siguientesProductos,
  anterioresProductos,
  siguientesProdFil,
  anterioresProdFil,
} from "../redux/searchDucks";


const Paginas = () => {

  const [ sig , setSig] = useState([]);
  const [ ant , setAnt] = useState([]);
  const [ a , setA] = useState(7);
  const [ b , setB] = useState(14);
  const [ c , setC] = useState(a);
  const [ d , setD] = useState(b);
  const [ interruptor , setInterruptor] = useState(true);
  const dispatch = useDispatch();

  var productos = useSelector((store) => store.productos.array);


  // var interruptor = useSelector((store) => store.productos.interruptor);
  console.log(productos);

  const prodFiltrados = useSelector((store) => store.productos.resFiltrados);
//  console.log(prodFiltrados);
  const value = useSelector((store) => store.productos.value);
  // console.log(value);

  

  var leyenda = (
    <h3 style={{ textAlign: "center", marginTop: "140px" }}>
      Tu búsqueda aparecerá aquí
    </h3>
  );

  if (prodFiltrados.length > 0 && interruptor === false) {
    productos = false;
    leyenda = null;
  }

var prodPaginacion = []
  prodPaginacion = productos.slice(0, 7)
  // console.log(prodPaginacion)

 
  // if(interruptor === true){
  //  var a =0
  //  var b =7
  // } 

  // if(interruptor === true){
  //   var c =0
  //   var d =7
  //  } 

   console.log ('Soy a y b del scoope global ' + a + b)
  //  console.log ('Soy c y d del scoope global ' + c + d)

   function siguientes(productos){
    
   setA(a+7)
   setB(b+7)
     console.log ('Soy a y b dentro de f de sig ' + a + b)
      prodPaginacion = productos.slice(a, b);
    //  setInterruptor(false)
      return  prodPaginacion
   }

   function anteriores(productos){
    
    setC(c-7)
   setD(d-7)
     console.log ('Soy c y d dentro de f anteriores ' + c + d)
      prodPaginacion = productos.slice(c, d);
     setInterruptor(false)
      return  prodPaginacion
   }
   
   const handleSiguientes = () => {
    siguientes(productos);
    setSig(prodPaginacion)
    console.log('Ejecuté siguientes')
    console.log(prodPaginacion)
  };

  const handleAnteriores = () => {
    anteriores(productos);
    setAnt(prodPaginacion)
    console.log('Ejecuté Anteriores')
    console.log(prodPaginacion)
  };
 
  
  console.log(sig)
  console.log(ant)
  return (
    <div>
      <div className="row">
        { prodPaginacion &&  sig.length === 0 ? 
             prodPaginacion.map((e) => (
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
          :  sig.length > 0 ?
          sig.map((e) => (
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
           :  ant.length > 0 ?
           sig.map((e) => (
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
          : leyenda}
  
      </div>

      <div style={{ textAlign: "center", position: "sticky"}}>
            <button
              className="btn active cyan darken-3"
              onClick={handleAnteriores}
            >
              anteriores
            </button>
            <button
              className="btn active cyan darken-3"
              onClick={handleSiguientes}
            >
              siguientes
            </button>
          </div>






      {/* <div className="row">
        {prodFiltrados.length > 0
          ? prodFiltrados.map((e) => (
              <div className="col s13 m6 l4 " key={e.id}>
                <ProductCard
                  img={e.url_image}
                  title={e.title}
                  price={e.price}
                  discount={e.discount}
                  id={e.id}
                />
              </div>
            ))
          : null}

  
      </div> */}
      {/* {productos.length > 0 ? (
          <div style={{ textAlign: "center" }}>
            <button
              className="btn active cyan darken-3"
              onClick={() => dispatch(anterioresProductos(value))}
            >
              anteriores
            </button>
            <button
              className="btn active cyan darken-3"
              onClick={() => dispatch(siguientesProductos(value))}
            >
              siguientes
            </button>
          </div>
        ) : null}

      {prodFiltrados.length > 0 && interruptor === false ? (
          <div style={{ textAlign: "center", position: "sticky"}}>
            <button
              className="btn active cyan darken-3"
              onClick={() => dispatch(siguientesProdFil(value))}
            >
              siguientes
            </button>
            <button
              className="btn active cyan darken-3"
              onClick={() => dispatch(anterioresProdFil(value))}
            >
              anteriores
            </button>
          </div>
        ) : null} */}
    </div>
  );
};

export default Paginas;
