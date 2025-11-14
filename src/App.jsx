import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);

  const handlecompleted = () => {
    const completed = allTodos.filter((item) => item.isCompleted);
    settodos(completed);
  };

  const handlepending = () => {
    const pending = allTodos.filter((item) => !item.isCompleted);
    settodos(pending);
  };

  const handletasks = () => {
    settodos(allTodos);
  };

  const handlecheckbox = (id) => {
    const updatedAll = allTodos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setAllTodos(updatedAll);
    settodos(updatedAll);
  };

  const handleedit = (id) => {
    const todoToEdit = allTodos.find((item) => item.id === id);
    settodo(todoToEdit.todo);

    const newTodos = allTodos.filter((item) => item.id !== id);
    setAllTodos(newTodos);
    settodos(newTodos);
  };

  const handledelete = (id) => {
    const newTodos = allTodos.filter((item) => item.id !== id);
    setAllTodos(newTodos);
    settodos(newTodos);
  };

  const handleadd = () => {
    if (todo.trim() === "") return;

    const newTodo = { id: Date.now(), todo, isCompleted: false };
    const newTodos = [...allTodos, newTodo];
    settodos(newTodos);
    setAllTodos(newTodos);
    settodo("");
  };

  const handlechange = (e) => {
    settodo(e.target.value);
  };

  return (
    <>
      <Navbar
        handlecompleted={handlecompleted}
        handletasks={handletasks}
        handlepending={handlepending}
      />

      <div className="container mx-auto my-10 p-6 min-h-[80vh] bg-[#f9f6f1] rounded-xl shadow-sm border border-[#ece3d2]">
        <div className="mx-auto max-w-xl bg-white p-6 rounded-xl shadow-md border border-[#e6ded0]">
          <h2 className="text-2xl w-fit mx-auto font-semibold text-gray-800 mb-5">
            Add a To-do
          </h2>

          <div className="flex flex-col items-center gap-4">
            <input
              onChange={handlechange}
              value={todo}
              type="text"
              className="w-full bg-[#faf7f3] text-gray-800 px-4 py-2 rounded-lg outline-none border border-[#d8d0c0] placeholder-gray-400 focus:border-[#6d5dfc] transition-all"
              placeholder="Enter your task..."
            />

            <button
              onClick={handleadd}
              className="w-full bg-[#6d5dfc] hover:bg-[#5b4de8] text-white py-2 rounded-lg font-medium shadow-sm transition-all"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-3xl bg-white mt-8 p-6 rounded-xl shadow-md border border-[#e6ded0]">
          <h1 className="font-semibold text-3xl text-gray-800 text-center mb-6">
            Your To-dos
          </h1>

          <div className="space-y-3">
            {todos.length === 0 ? (
              <p className="text-center text-gray-500 mt-5">No tasks yet...</p>
            ) : (
              todos.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-[#faf7f3] border border-[#e9e1d3] hover:bg-[#f3eee4] transition-all p-4 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={item.isCompleted}
                      onChange={() => handlecheckbox(item.id)}
                      className="w-5 h-5 accent-[#6d5dfc]"
                    />

                    <div
                      className={`text-lg ${
                        item.isCompleted
                          ? "line-through text-gray-400"
                          : "text-gray-700"
                      }`}
                    >
                      {item.todo}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleedit(item.id)}
                      className="bg-[#6d5dfc] hover:bg-[#5b4de8] py-1 px-4 rounded-md text-white font-medium shadow-sm transition-all"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handledelete(item.id)}
                      className="bg-[#e45858] hover:bg-[#cc3f3f] py-1 px-4 rounded-md text-white font-medium shadow-sm transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
