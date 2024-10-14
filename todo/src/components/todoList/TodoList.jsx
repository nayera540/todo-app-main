import './todoList.css';
import todos from '/public/data.json';
import Todo from '../todos/Todo';



function TodoList() {
    return (
        <div className='relative w-full max-w-[700px] mt-9'>
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-[1px] border-Very-Light-Grayish-Blue bg-white mx-2"></span>
            <input className='max-w-[700px] w-full h-[55px] rounded-lg py-8 px-5 pl-16 text-xl text-Very-Dark-Grayish-Blue items-center caret-Bright-Blue' placeholder='Create a new todo...' />
            {todos.length > 0 && todos.map((todo) => (
                <Todo key={todo.id} todo={todo}/>
            ))}
        </div>
    )
}

export default TodoList;
