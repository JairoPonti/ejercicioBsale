const server = require('./src/app');
const { conn } = require('./db');

  server.listen(process.env.PORT, () => {  
    console.log('%s listening at 4000'); // eslint-disable-line no-console
  });


