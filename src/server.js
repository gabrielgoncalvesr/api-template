const app = require('./app');

const message = `Application running in ${process.env.NODE_ENV} mode. Initing server on port ${process.env.API_PORT}`

app.listen(process.env.API_PORT, () => console.log(message));