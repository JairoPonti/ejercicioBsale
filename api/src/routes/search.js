const server = require("express").Router();
const axios = require('axios');
const { Product, Category, conn } = require('../../db');
// const { Sequelize:{Op}} = require('sequelize');
const { Op } = require("sequelize");
const { Sequelize } = require('sequelize')


// Ruta a /search
server.get('/', (req, res) => {
	conn.query('SELECT * FROM product').then((data) => {
		console.log('estoy adentro y tengo' + data)
		res.send(data)
		})
});

module.exports = server
