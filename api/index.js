const server = require('./src/app');
const { conn } = require('./db');


// Syncing all the models at once. Sincronizando todos los modelos a la vez
// conn.sync({ force: false }).then(() => {

  server.listen(4000, () => {  
    console.log('%s listening at 4000'); // eslint-disable-line no-console
  });
// });    

// conn.query('SELECT * FROM product').then((data) => {
//     server.listen(3000, () => {
//       console.log(data)
//       console.log('%s listening at 3000'); 
//     });
//   })