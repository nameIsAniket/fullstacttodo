const zod = require("zod")

//write the zod scheme for to check the following 
/*
    {
        title: string,
        description : string,
        completed: boolean
    }
    {
        id: string
    }
*/

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}