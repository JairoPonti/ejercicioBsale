const server = require("express").Router();
const axios = require('axios');
const { Product, Category, conn } = require('../../db');
// const { Sequelize:{Op}} = require('sequelize');
const { Op } = require("sequelize");
const { Sequelize } = require('sequelize')


// Ruta a /search
server.get('/', (req, res, next) => {
	// conn.query('SELECT * FROM product').then((data) => {
	// 	console.log('estoy adentro y tengo' + data)
	// 	res.send(data)
	// 	})
 console.log(req.query)
 var parametro = "'" + req.query.q + "'"
 conn.query('SELECT * FROM product WHERE name ='+ parametro).then((data) => {
		console.log('estoy adentro y tengo' + data)
		res.send(data)
		}) 





	// Product.findOne({
	// 	where: {
	// 		name: req.query.q
	// 	}
	// }).then(products => {
	// 	console.log('Esto es despues del then' + products)
	// 	return res.status(200).json({
	// 		busqueda: products,
	// 	})}
	// ).catch(error =>{ 
	// 	return res.status(404).json(error)
	// 	})


});

// Ruta a /search/category

// server.get('/', (req, res, next) => { //Definir si será por query o body

//  console.log(req.query)

//  conn.query('SELECT * FROM product WHERE id ='+ 52).then((data) => { //Luego del id=, debe recibir dinámicamente el número de categoría
// 		console.log('estoy adentro y tengo' + data)
// 		res.send(data)
// 		}) 

// 	});

module.exports = server
