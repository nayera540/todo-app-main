import './todoList.css';
import Todo from '../todos/Todo';
import { useState } from 'react';



function TodoList({todos, dispatch}) {
    const [todoInput, setTodoInput] = useState("");

    function handleAddNewTask(){
        dispatch({type: "Add_Task", payload: todoInput});
        setTodoInput("");
    }

    return (
        <div className='w-full max-w-[700px] mt-9 mb-9'>
            <div className='relative w-full mb-8'>
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-[1px] border-Very-Light-Grayish-Blue bg-white mx-2"></span>
                <input className='max-w-[700px] w-full h-[55px] rounded-lg py-8 px-5 pl-16 text-xl focus:outline-none text-Very-Dark-Grayish-Blue items-center caret-Bright-Blue' value={todoInput} onChange={e => setTodoInput(e.target.value)} onKeyDown={(e) => {if(e.key === "Enter") handleAddNewTask();}} placeholder='Create a new todo...' />
            </div>
            <div className='w-full rounded-lg bg-white'>
                {todos.length > 0 && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList;
