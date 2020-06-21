import React,{createContext} from 'react';


const TodosContext=createContext({
     
    todos:[

    
     {id:1,text:'Eat breakfast',complete:true},
    {id:2,text:'Do lanudry',complete:false},
    {id:3,text:'Finish project',complete:true}


    ],
    currentTodo:{}
})

export default TodosContext;