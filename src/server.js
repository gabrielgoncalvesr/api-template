const app = require('./app');
const { info } = require('../utils/log');

const message = `Application running in ${process.env.NODE_ENV} mode. Initing server on port ${process.env.PORT || 3333}.`

app.listen(process.env.PORT || 3333, () => info(message));