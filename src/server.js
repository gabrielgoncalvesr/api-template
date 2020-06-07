const app = require('./app');

const message = `Application running in ${process.env.NODE_ENV} mode. Initing server on port ${process.env.PORT}`

app.listen(process.env.PORT, () => console.log(message));