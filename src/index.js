const app = require('./app');
const config = require('./config');
const port = config.port || 3000;
const db = require('./models');

app.listen(config.port, async () => {
  var force = false;
  if (config.env === 'development') {
    force = false;
  }
  await db.sequelize.sync({
    force
  });
  console.log(`Server start at : ${config.urlBack}:${port}`);
});