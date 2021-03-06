const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.

try {
  conn.sync({ force: true})
    .then(() => {
      console.log('base de datos conectada! :D');
      server.listen(3001, () => {
        console.log('%s listening at 3001'); // eslint-disable-line no-console
      });
    });
} catch (error) {
  console.log(error)
}