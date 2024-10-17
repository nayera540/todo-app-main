import TodoList from "./components/todoList/TodoList";
import todos from "../public/data.json";
import { useEffect, useReducer, useState } from "react";

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
                active: state.active.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
                ),
                completed: state.completed.map((todo) =>
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
                todos: [
                    ...state.todos,
                    { id: state.todos.length + 1, title: action.payload, done: false },
                ],
            };
        case "Remove_Task":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
                active: state.active.filter((todo) => todo.id !== action.payload.id),
                completed: state.completed.filter(
                    (todo) => todo.id !== action.payload.id
                ),
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

    const [theme, setTheme] = useState("light");

    function handleThemeToggle() {
        setTheme((currTheme) => {
            const newTheme = currTheme === "light" ? "dark" : "light";
            if (newTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return newTheme;
        })
    }

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className="max-w-[700px] w-full mx-auto mt-[70px] md:px-0 px-3 transition-colors duration-1000">
            <div className="flex flex-row justify-between transition-colors duration-1000">
                <h1 className="text-white font-black uppercase tracking-[.45em] text-4xl">
                    todo
                </h1>
                <button onClick={handleThemeToggle}>
                    {theme === "dark" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                            <path
                                fill="#FFF"
                                fill-rule="evenodd"
                                d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
                            />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                            <path
                                fill="#FFF"
                                fill-rule="evenodd"
                                d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <div className="transition-colors duration-1000">
                <TodoList
                    todos={todos}
                    active={active}
                    completed={completed}
                    dispatch={dispatch}
                />
            </div>
        </div>
    );
}

export default App;
