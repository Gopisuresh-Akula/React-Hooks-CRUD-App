import React,{useContext,useReducer} from 'react';
import TodosContext from './Context';
import todosReducer from './reducer'
import TodoList from './Components/TodoList';
import Todoform from './Components/Todoform';


const App = () => {



const initialState=useContext(TodosContext)

const [state, dispatch] = useReducer(todosReducer, initialState)

 









  return (
   
<>
<TodosContext.Provider value={{state, dispatch}}>
<Todoform/>
<TodoList/>



</TodosContext.Provider>
</>

  );
}
 
export default App;