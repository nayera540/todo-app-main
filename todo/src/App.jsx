import TodoList from "./components/todoList/TodoList";

function App() {
    return (
        <div className="max-w-[700px] w-full mx-auto mt-[70px] md:px-0 px-3">
            <div className="flex flex-row justify-between">
                <h1 className="text-white font-black uppercase tracking-[.45em] text-4xl">todo</h1>
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
                <TodoList />
            </div>
        </div>
    );
}

export default App;
