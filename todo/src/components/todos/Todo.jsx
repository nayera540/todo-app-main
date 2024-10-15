import { useState } from "react";
import "./Todo.css";
import audio from "/public/success.mp3";

function playAudio() {
    new Audio(audio).play();
}

function Todo({ todo, dispatch }) {
    const [isEditToggled, setIsEditToggled] = useState(false);

    function handleEditToggle() { }

    function handleCheckTodo(todo) {
        if (!todo.done) {
            playAudio();
        }
        dispatch({ type: "Toggle_Task_Done", payload: todo });
    }

    function handleRemoveTask(todo) {
        dispatch({ type: "Remove_Task", payload: todo });
    }

    return (
        <div className="w-full max-w-[700px] bg-white h-20 border-solid border-b-[1px] first:rounded-t-lg p-5 border-Light-Grayish-Blue flex flex-row">
            {isEditToggled ? (
                ""
            ) : (
                <div className="group flex flex-row items-center justify-between hover:cursor-pointer">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onClick={() => handleCheckTodo(todo)}
                            className="checkbox appearance-none w-6 h-6 gradient-border-hover flex-shrink-0  focus:outline-none cursor-pointer duration-200"
                        />

                        <label
                            className={`grid content-center ml-6 text-xl  ${todo.done
                                ? "line-through text-Light-Grayish-Blue"
                                : "text-Very-Dark-Grayish-Blue"
                                }`}
                            onClick={handleEditToggle}
                        >
                            {todo.title}
                        </label>
                    </div>
                    <div className="flex">
                        <button className="" onClick={handleRemoveTask}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                <path
                                    fill="#494C6B"
                                    fill-rule="evenodd"
                                    d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Todo;
