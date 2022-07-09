import mongoose from "mongoose";
const Schema = mongoose.Schema

// definimos el modelo de la base datos y el tipo de varible que sera cada dato
const blogSchema = new Schema(
    {
      title: {type:String},       
      content: {type:String},
      name: {type:String},
      precio:{type:Number},
      descripcion:{type:String}
    },
    {collection: 'blogs'}
)

export default mongoose.model('BlogModel', blogSchema)