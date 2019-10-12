const express = require('express');
const router = express.Router();
var data  = require('../data/data.json')

var todolist = [...data.todoList];

router.get('/',(req,res)=>{
    res.json(todolist)
})
router.get('/:id',(req,res)=>{
    let todoId =  req.params.id;
    console.log(todoId)
    let todo = todolist.find(item=>item.id==todoId)
       
    res.json(todo)
})
router.post('/',(req,res)=>{
    let todoObj =  req.body;
   todolist.push(todoObj)
    res.json({
        'msg':'todo added to the list',
        'status':'success'
    })
})

router.put('/:id',(req,res)=>{
    let todoObj =  req.body;
    let id = req.params.id;
    let idx = todolist.findIndex(item=>item.id==id)
    
    todolist[idx].done = todoObj.done;

    res.json({
        'msg':'todo updated to the list',
        'status':'success'
    })
})


router.delete('/:id',(req,res)=>{
    let todoId =  req.params.id;
    
    let todoObj = todolist.find(item=>item.id==todoId)
    if(todoObj.done)
    res.json({
        'msg':'todo can not be deleted from the  list',
        'status':'failed'
    })
    else{
        todolist = [...todolist.filter(item=>item.id!=todoId)]
        res.json({
            'msg':'todo deleted from the list',
            'status':'success'
        })
    }
    
})
module.exports = router;

