const server = require("express").Router();
const axios = require('axios');
// const mcache = require('memory-cache');

// const cache = (duracion) => {
//     console.log('Tiempo limite de guardado en cache: ', duracion + 'segundos')
//     return (req, res, next) => {
//         const key = req.query.term;
//         const cacheBody = mcache.get(key);
//         if (cacheBody) {
//             res.send(cacheBody)
//             return
//         } else {
//             res.sendResponse = res.send;
//             res.send = (body) => {
//                 mcache.put(key, body, duracion * 1000);
//                 res.sendResponse(body)
//             }
//             next()
//         }
//     }
// }
// server.get('/', (req, res, next) => {
//     console.log('jeje')
//     if (req.query.term) {
//         axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.term).then(resp => {
//             const data = resp.data.results.map(item => {                                                //results es el array con la rta de la api
//                 return { currency_id: item.currency_id, id: item.id, title: item.title, price: item.price, available_quantity: item.available_quantity, thumbnail: item.thumbnail, condition: item.condition }
//             })
//             res.send(data)
//         }).catch(() => {
//             res.sendStatus(404)
//         })
//     }
// })
// server.get('/galery/', cache(1000), (req, res, next) => {
//     axios.get('https://api.mercadolibre.com/items/' + req.query.term).then(resp => {
//         res.send(resp.data.pictures)
//     })
// })
// server.get('/category/:category', (req, res, next) => {
//     axios.get("https://api.mercadolibre.com/sites/MLA/search?category=" + req.params.category).then(resp => {
//         const data = resp.data.results.map(item => {
//             return { currency_id: item.currency_id, id: item.id, title: item.title, price: item.price, available_quantity: item.available_quantity, thumbnail: item.thumbnail, condition: item.condition }
//         })
//         console.log(data);
//         res.send(data)
//     }).catch(() => {
//         res.sendStatus(404)
//     })
// })
// server.get('/categories', cache(1000), (req, res, next) => {
//     axios.get("https://api.mercadolibre.com/sites/MLA/categories").then(resp => {
//         console.log(resp.data)
//         res.send(resp.data)
//     }).catch(() => {
//         res.sendStatus(404)
//     })
// })

server.get('/', (req, res) => {
	Category.findAll()
		.then(products => {
			res.status(200).json(products);
		})
		.catch((err)=> {
            res.status(400).json(err)
        });
});

module.exports = server
