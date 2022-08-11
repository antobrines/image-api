const app = require('./app');
const config = require('./config/index');
const port = config.port || 3000;
const db = require('./models');

app.listen(config.port, async () => {
  await db.sequelize.sync({
    force: true
  });
  console.log(`Server start at : ${config.url}:${port}`);
});