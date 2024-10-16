import TodoList from "./components/todoList/TodoList";
import todos from "../public/data.json";
import { useReducer } from "react";

const initialState = {
    todos: todos,
    active: [],
    completed: [],
};

function todoReducer(state, action) {
    switch (action.type) {
        case "Toggle_Task_Done":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
                ),
            };
        case "Edit_task":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, title: action.payload.title }
                        : todo
                ),
            };
        case "Add_Task":
            return {
                ...state,
                todos: [...state.todos, { id: state.todos.length + 1, title: action.payload, done: false }]
            };
        case "Remove_Task":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            };
        case "All_Tasks":
            return {
                ...state,
                todos: state.todos,
            };
        case "Active_Tasks":
            return {
                ...state,
                active: state.todos.filter((todo) => !todo.done),
            };
        case "Completed_Tasks":
            return {
                ...state,
                completed: state.todos.filter((todo) => todo.done),
            };
        case "Clear_Completed":
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.done),
                completed: [],
            };
        default:
            return state;
    }
}

function App() {
    const [{ todos, active, completed }, dispatch] = useReducer(
        todoReducer,
        initialState
    );


    return (
        <div className="max-w-[700px] w-full mx-auto mt-[70px] md:px-0 px-3">
            <div className="flex flex-row justify-between">
                <h1 className="text-white font-black uppercase tracking-[.45em] text-4xl">
                    todo
                </h1>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                        <path
                            fill="#FFF"
                            fill-rule="evenodd"
                            d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                        />
                    </svg>
                </button>
            </div>
            <div>
                <TodoList todos={todos} active={active} completed={completed} dispatch={dispatch} />
            </div>
        </div>
    );
}

export default App;
