const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aniketlakade:FrYlchQpYbnj77FX@cluster0.7yskacq.mongodb.net/tododb");

const todoSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        completed: Boolean
    }
)
const todo = mongoose.model('tododb',todoSchema)
module.exports = {
    todo:todo
}
