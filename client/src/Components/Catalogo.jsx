import React from "react";
import Paginas2 from "./Paginas2";
import "../Button.css";
import { useSelector, useDispatch } from "react-redux";
import {
  paraFiltrarMayorP,
  paraFiltrarMenorP,
  categorySearch,
} from "../redux/searchDucks";

const Catalogo = () => {
  const dispatch = useDispatch();

  var arr = useSelector((store) => store.productos.array[0]);
  console.log(arr);

  const res = useSelector((store) => store.productos.array);

  var energetica = "1";
  var pisco = "2";
  var ron = "3";
  var bebida = "4";
  var snack = "5";
  var cerveza = "6";
  var vodka = "7";

  return (
    <div>
      <div className="row">
        <h5 style={{ display: "flex", justifyContent: "center" }}>
          Ordená los productos
        </h5>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={() => dispatch(paraFiltrarMenorP())}
          >
            <i className="material-icons">attach_money</i>Menor a Mayor
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={() => dispatch(categorySearch(energetica))}
          >
            Bebida energética
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={() => dispatch(categorySearch(pisco))}
          >
            Pisco
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={() => dispatch(categorySearch(ron))}
          >
            Ron
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={() => dispatch(paraFiltrarMayorP())}
          >
            <i className="material-icons ">attach_money</i>Mayor a Menor
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={() => dispatch(categorySearch(snack))}
          >
            Snack
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={() => dispatch(categorySearch(cerveza))}
          >
            Cerveza
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={() => dispatch(categorySearch(vodka))}
          >
            Vodka
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={() => dispatch(categorySearch(bebida))}
          >
            Bebida
          </button>
        </div>
      </div>
      <div className="row">
        <div></div>
      </div>
      <div className="content">
        <div className="row">{res ? <Paginas2 p={res.results} /> : null}</div>
      </div>
    </div>
  );
};

export default Catalogo;
