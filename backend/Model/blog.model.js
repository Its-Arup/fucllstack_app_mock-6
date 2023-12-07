const mongoose = require('mongoose')

const comentSchema = mongoose.Schema({
    username : String,
    content  : String,
})

const blogSchema = mongoose.Schema({
    title: String,
    userId : String,
    Content: String,
    Category: String,
    username : String,
    date : String,
    like : Number,
    comments :[comentSchema]
})

const BlogModel = mongoose.model("blog", blogSchema)


module.exports={
    BlogModel
}

