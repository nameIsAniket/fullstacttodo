//writing a basic boilerplate code for the express 
//with express json middleware

const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./type") ;
const { todo } = require("./db");
const cors = require("cors")

app.use(express.json(),cors());

app.post('/todo',async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg: "You have entered the wrong input"
        })
        return;
    }
    //put in mongodb
    todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.status(200).json({
        msg: "todo created"
    })

})

app.get("/todos",async function(req,res){
    const alltods = await todo.find({});
    res.status(200).json(alltods)
})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg:"Invalid input"
        })
        return ;
    }
    //update the db
    await todo.update(
        {
            _id : req.body.id
        },
        {
            completd: true
        }
    )
    res.status(200).json({
        msg: "Marked as completed"
    })
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000")
})