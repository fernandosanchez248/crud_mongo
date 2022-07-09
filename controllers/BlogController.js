//importamos el Modelo
import BlogModel from "../models/BlogModel.js";

//** Métodos para el C R U D **/

//Mostramos tods los bloque con .find
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find() 
        res.status(200).json(blogs)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un  solo blog
export const getBlog = async (req, res) => {
        try {
            const id = req.params.id
            await BlogModel.findById( {_id:id} ).then( (blog) => {
                res.status(200).json(blog)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Creaamos  un blog con createblog
export const createBlog = async (req, res) => {
    try {
       await BlogModel.create(req.body)
       res.status(200).json({
           "message":"has creado un nuevo blog"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un blog
export const updateBlog = async (req, res) => {
    try {
        const id = req.params.id
        await BlogModel.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"has atualializado el blog"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un blog
export const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id
        await BlogModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"has eliminado un blog"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}