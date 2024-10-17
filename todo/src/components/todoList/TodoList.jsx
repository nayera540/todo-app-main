import "./todoList.css";
import Todo from "../todos/Todo";
import { useState } from "react";

function TodoList({ todos, dispatch, active, completed }) {
    const [todoInput, setTodoInput] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    let itemsLeft = todos.filter((todo) => !todo.done).length;

    function handleAddNewTask() {
        dispatch({ type: "Add_Task", payload: todoInput });
        setTodoInput("");
    }

    function handleActiveTasks() {
        dispatch({ type: "Active_Tasks" });
        setActiveFilter("Active");
    }

    function handleAllTasks() {
        dispatch({ type: "All_Tasks" });
        setActiveFilter("All");
    }

    function handleCompletedTasks() {
        dispatch({ type: "Completed_Tasks" });
        setActiveFilter("Completed");
    }

    function handleClearCompletedTasks() {
        dispatch({ type: "Clear_Completed" });
    }

    return (
        <div className="w-full max-w-[700px] mt-9 mb-9">
            <div className="relative w-full mb-8">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-[1px] border-Very-Light-Grayish-Blue bg-white mx-2"></span>
                <input
                    className="max-w-[700px] w-full h-[55px] rounded-lg py-8 px-5 pl-16 text-xl focus:outline-none text-Very-Dark-Grayish-Blue items-center caret-Bright-Blue"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleAddNewTask();
                    }}
                    placeholder="Create a new todo..."
                />
            </div>
            <div className="w-full rounded-lg bg-white">
                {activeFilter === "All" &&
                    todos.length > 0 &&
                    todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                    ))}
                {activeFilter === "Active" &&
                    active.length > 0 &&
                    active.map((todo) => (
                        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                    ))}
                {activeFilter === "Completed" &&
                    completed.length > 0 &&
                    completed.map((todo) => (
                        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                    ))}
                <div className="filter-tasks w-full bg-white h-14 flex flex-row items-center justify-between rounded-b-lg px-7">
                    <p className="text-Dark-Blue-Grayish-Blue">{itemsLeft} items left</p>
                    <div className="navigate flex gap-5">
                        <button className={`${activeFilter === "All"? "text-Bright-Blue":"text-Dark-Blue-Grayish-Blue"} font-bold text-[17px]`} onClick={handleAllTasks}>
                            All
                        </button>
                        <button className={`${activeFilter === "Active"? "text-Bright-Blue":"text-Dark-Blue-Grayish-Blue"} font-bold`} onClick={handleActiveTasks}>
                            Active
                        </button>
                        <button className={`${activeFilter === "Completed"? "text-Bright-Blue":"text-Dark-Blue-Grayish-Blue"} font-bold`} onClick={handleCompletedTasks}>
                            Completed
                        </button>
                    </div>
                    <button className="text-Dark-Blue-Grayish-Blue hover:text-Very-Dark-Grayish-Blue duration-150" onClick={handleClearCompletedTasks}>
                        Clear Completed
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
