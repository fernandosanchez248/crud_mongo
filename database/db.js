import mongoose from 'mongoose'
// esta en la direccion donde se encuentra la base de datos
const url = 'mongodb://localhost:27017/mern'
mongoose.connect (url)

const db = mongoose.connection
db.on('open', () =>{console.log("conectado a MongoDb FUNCIONAAAAA");})
db.on('error',() =>{console.log("la base de datos NO FUNCIONA");})
export default db