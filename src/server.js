const app = require('./app');

app.listen(process.env.APP_PORT || process.env.PORT);