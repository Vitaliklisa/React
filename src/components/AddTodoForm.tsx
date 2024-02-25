import { useState } from "react"

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit}: AddTodoFormProps){ 
    const [input, setInput] = useState("")

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      if(!input.trim()) return;

      onSubmit(input);
      setInput("");
    }

    return(
    <form className="flex" onSubmit={handleSubmit}>
      <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
        className="rounded-r-lg sp grow border border-gray-400 p-2"
      />
      <button
        type="submit"
        className="w-16 rounded-xl  bg-blue-500 text-white hover:bg-blue-400"
      >
        Add
      </button>
    </form>
)}
   
