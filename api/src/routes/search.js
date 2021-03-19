const server = require("express").Router();
const axios = require('axios');
const { Product, Category, conn } = require('../../db');
const { Sequelize:{Op}} = require('sequelize');
// const { Op } = require("sequelize");
const { Sequelize } = require('sequelize')


// Ruta a /search
server.get('/', (req, res, next) => {
	// conn.query('SELECT * FROM product').then((data) => {
	// 	console.log('estoy adentro y tengo' + data)
	// 	res.send(data)
	// 	})
//  console.log(req.query)
//  var parametro = "'" + req.query.q + "'"
//  conn.query('SELECT * FROM product WHERE name ='+ parametro).then((data) => {
// 		console.log('estoy adentro y tengo' + data)
// 		res.send(data)
// 		}) 

 var param = "'" + req.query.q + "'"
// var parametro = '%' + req.query.q + '%';
Product.findAll({
  where: {
    name:{ 
		[Op.like]: param
	}
  }
}).then(products => {
	res.send(products)
  }
	).catch(error =>{ 
		return res.status(404).json(error)
		})



});

// Ruta a /search/lower/price
// server.get('/', (req, res, next) => {
// 	console.log(req.query)
// 	var parametro = "'" + req.query.q + "'"
//  conn.query('SELECT * FROM product WHERE name ='+ parametro).then((data) => {
// 		console.log('estoy adentro y tengo' + data)
// 		res.send(data)
// 		}) 

// });





// Ruta a /search/category

// server.get('/', (req, res, next) => { //Definir si será por query o body

//  console.log(req.query)

//  conn.query('SELECT * FROM product WHERE id ='+ 52).then((data) => { //Luego del id=, debe recibir dinámicamente el número de categoría
// 		console.log('estoy adentro y tengo' + data)
// 		res.send(data)
// 		}) 

// 	});

module.exports = server
