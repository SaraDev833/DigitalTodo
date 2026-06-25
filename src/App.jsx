import { useState } from 'react'


function App() {
  const[title , setTitle] = useState("")
  const [description , setDescription] = useState("");
  const [todos , setTodos] = useState([]);


  // Add function
  const handleAdd =()=>{
    if(!title.trim() || !description.trim()){
      alert("fill both fileds")
      return
    };
       const newTodo = {
        id: Date.now(),
        title:title,
        description:description,
        isCompleted:false,
       }
       setTodos([...todos,newTodo])
       setTitle("")
       setDescription("")
  }
  const handleCheck = (id)=>{
    const updatedTodos = todos.map((todo)=>(
      todo.id=== id?{...todo,isCompleted:!todo.isCompleted}:todo
    ));
    setTodos(updatedTodos)
  }
  return (
    <>
      
           <div className="min-h-screen bg-slate-100 py-10 px-4">
  <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">

    {/* Header */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-slate-800">
        Smart Todo App
      </h1>
      <p className="text-slate-500 mt-2">
        Manage your daily tasks efficiently
      </p>
    </div>

    {/* Search */}
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search tasks..."
        className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Add Todo */}
    <div className="bg-slate-50 p-4 rounded-xl mb-6">
      <div className="flex flex-col gap-3">

        <input
          type="text"
          placeholder="Task title..."
          className="p-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          onChange={(e)=>setDescription(e.target.value)}
          rows="3"
          placeholder="Task description..."
          className="p-3 border border-slate-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500"
        />

        <button
        onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
        >
          Add Task
        </button>

      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

      <div className="bg-blue-100 p-4 rounded-xl text-center">
        <h3 className="text-3xl font-bold text-blue-700">12</h3>
        <p className="text-slate-600">Total Tasks</p>
      </div>

      <div className="bg-green-100 p-4 rounded-xl text-center">
        <h3 className="text-3xl font-bold text-green-700">8</h3>
        <p className="text-slate-600">Completed</p>
      </div>

      <div className="bg-red-100 p-4 rounded-xl text-center">
        <h3 className="text-3xl font-bold text-red-700">4</h3>
        <p className="text-slate-600">Pending</p>
      </div>

    </div>

    {/* Filters */}
    <div className="flex gap-3 mb-6 flex-wrap">

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        All
      </button>

      <button className="bg-white border px-4 py-2 rounded-lg">
        Completed
      </button>

      <button className="bg-white border px-4 py-2 rounded-lg">
        Pending
      </button>

    </div>

    {/* Todo List */}
    {todos.map((todo) =>(

   
    <div className="space-y-4" key={todo.id}>

      <div  className="bg-slate-50 border rounded-xl p-4 flex justify-between items-start">

        <div>
          <div className="flex items-center gap-2 mb-2">
            <input type="checkbox" checked={todo.isCompleted}  onClick={()=>handleCheck(todo.id)}/>
            <h3 className="font-semibold text-lg">
             {todo.title}
            </h3>
          </div>
       
          <p className="text-slate-600">
          {todo.description}
          </p>

          <p className="text-xs text-slate-400 mt-2">
            {new Date(todo.id).toLocaleDateString()}
          </p>
        </div>

        <div className="flex gap-2">

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg text-sm">
            Edit
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm">
            Delete
          </button>

        </div>

      </div>

      {/* <div className="bg-slate-50 border rounded-xl p-4 flex justify-between items-start">

        <div>
          <div className="flex items-center gap-2 mb-2">
            <input checked type="checkbox" readOnly />
            <h3 className="font-semibold text-lg line-through text-slate-400">
              Build Smart Todo Project
            </h3>
          </div>

          <p className="text-slate-500">
            Complete all CRUD functionalities.
          </p>

          <p className="text-xs text-slate-400 mt-2">
            Created: 23 June 2026
          </p>
        </div>

        <div className="flex gap-2">

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg text-sm">
            Edit
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm">
            Delete
          </button>

        </div>

      </div> */}

    </div>
 ))}
    {/* Clear All */}
    <div className="mt-8 text-center">
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl">
        Clear All Tasks
      </button>
    </div>

  </div>
</div>
    </>
  )
}

export default App
