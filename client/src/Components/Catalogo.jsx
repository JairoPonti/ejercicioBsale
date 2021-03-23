import React, { useState, useEffect } from 'react';
import Paginas2 from './Paginas2'
import '../Button.css'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {paraFiltrarUsados, paraFiltrarNuevos, paraFiltrarMayorP, paraFiltrarMenorP, categorySearch, obtenerProductos, siguientesProductos} from '../redux/searchDucks'


const Catalogo = () => {
	const dispatch = useDispatch();

    var arr = useSelector((store) => store.productos.array[0]);
    console.log(arr);
	const value = useSelector(store => store.productos.value)
	// console.log(value)

	const res = useSelector(store => store.productos.array ) 
	// console.log(res)

	var energetica = '1'
	var pisco = '2'
	var ron = '3'
	var bebida = '4'
	var snack = '5'
	var cerveza = '6'
	var vodka = '7'
	
	
	// async function categorySearch (val){
	//   try {
	// 	const res = await  axios.get(`http://localhost:4000/search/category?q=${val}`)
	// 	console.log(res.data[0])
	//   } catch (error) {
	// 	console.log(error)
	//   }
	// }

	return (
		<div>
			<div className="row">
				<h5 style= {{display: "flex", justifyContent:"center"}}>Ordená los productos</h5>
				<br/>
				<div style= {{display: "flex", justifyContent:"center"}}>
				 <button type="submit" className="btn yellow button" onClick={() => dispatch(paraFiltrarMenorP())}>
						<i className="material-icons">attach_money</i>Menor a Mayor
				</button>
				
				<button type="submit" className="btn yellow button" onClick={() => dispatch(paraFiltrarMayorP())}>
						<i className="material-icons ">attach_money</i>Mayor a Menor
          			</button> 
					   <button type="submit" className="btn yellow button" onClick={() => dispatch(categorySearch(energetica))}>
					Bebida energética
          			</button> 
				<button type="submit" className="btn yellow button"
			       onClick={() => dispatch(categorySearch(pisco))}>
					Pisco
          			</button>
				<button type="submit" className="btn yellow button"
				onClick={() => dispatch(categorySearch(ron))}>
					Ron
          			</button>
					  <button type="submit" className="btn yellow button"
				onClick={() => dispatch(categorySearch(bebida))}>
					Bebida
          			</button>
					  <button type="submit" className="btn yellow button"
				onClick={() => dispatch(categorySearch(snack))}>
					Snack
          			</button>
					  <button type="submit" className="btn yellow button"
				onClick={() => dispatch(categorySearch(cerveza))}>
					Cerveza
          			</button>
					  <button type="submit" className="btn yellow button"
				onClick={() => dispatch(categorySearch(vodka))}>
					Vodka
          			</button>
					  </div>
			</div>
			<div className="row">
				<div >
				
				</div>
			</div>
			<div className="content">
				<div className="row">
				{res ? <Paginas2 p={res.results} /> : null}
				</div>
			</div>
		</div >
	)
}

export default Catalogo;