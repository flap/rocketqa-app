const express = require ('express')
const bodyParser = require ('body-parser')
const swaggerUi = require ('swagger-ui-express')

const swaggerDocs = require ('./swagger.json')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

require('../app/controllers/index')(app)


app.listen(1302), () => console.log("Server is Running on port 1302")