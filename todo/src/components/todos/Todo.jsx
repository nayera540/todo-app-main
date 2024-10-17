import { useState } from "react";
import "./Todo.css";
import audio from "/public/success.mp3";

function playAudio() {
    new Audio(audio).play();
}

function Todo({ todo, dispatch, editTaskId, setEditTaskId }) {
    
    const [editTask, setEditTask] = useState(todo.title);

    function handleEditToggle() {
        if(editTask === todo.id){
            setEditTaskId(null);
        }else{
            setEditTaskId(todo.id);
        }
        
    }

    function handleEditTask() {
        dispatch({ type: "Edit_task", payload: { id: todo.id, title: editTask } });
        setEditTaskId(null);
    }

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
            {editTaskId === todo.id ? (
                <div className="flex flex-row justify-between w-full">
                    <input
                        type="text"
                        value={editTask}
                        autoFocus
                        onChange={(e) => setEditTask(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleEditTask();
                        }}
                        className={`grid content-center w-2/3 caret-Bright-Blue ml-2 outline-none text-xl hover:cursor-pointer ${todo.done
                                ? "line-through text-Light-Grayish-Blue"
                                : "text-Very-Dark-Grayish-Blue"
                            }`}
                    />
                    <div className="grid justify-center content-center grid-flow-col gap-2">
                        <button
                            className="bg-green-600 w-6 h-7 grid justify-center content-center rounded-md"
                            onClick={handleEditTask}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    stroke-width="2"
                                    d="M1 4.304L3.696 7l6-6"
                                />
                            </svg>
                        </button>
                        <button
                            className="bg-red-600 h-7 w-6 rounded-md grid justify-center content-center"
                            onClick={() => setEditTaskId(null)}
                        >
                            <svg
                                fill="#ffffff"
                                width="14px"
                                height="12px"
                                viewBox="0 0 200 200"
                                data-name="Layer 1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke-width="10"
                                stroke="#ffffff"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="" />

                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />

                                <g id="SVGRepo_iconCarrier">
                                    <title />

                                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="group flex flex-row items-center justify-between w-full">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onClick={() => handleCheckTodo(todo)}
                            className="checkbox appearance-none w-6 h-6 gradient-border-hover flex-shrink-0  focus:outline-none cursor-pointer duration-200"
                        />

                        <label
                            className={`grid content-center ml-6 text-xl hover:cursor-pointer ${todo.done
                                    ? "line-through text-Light-Grayish-Blue"
                                    : "text-Very-Dark-Grayish-Blue"
                                }`}
                            onClick={handleEditToggle}
                        >
                            {todo.title}
                        </label>
                    </div>
                    <div className="flex">
                        <button
                            className="remove-btn mr-2 opacity-0"
                            onClick={() => handleRemoveTask(todo)}
                        >
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
