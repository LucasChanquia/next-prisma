"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({params}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter();

  useEffect(()=>{
    if(params.id){
      fetch(`/api/task/${params.id}`)
    .then((res)=> res.json())
    .then(data =>{
      setTitle(data.title)
      setDescription(data.description)
    })
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

if(params.id){
  const res = await fetch(`/api/task/${params.id}`, {
    method: "PUT",
    body: JSON.stringify({ title, description }),
    headers: {
      "content-Type": "application/json",
    },
  });
  const data = await res.json()
  console.log(data);
} else {
  const res = await fetch("api/task", {
    method: "POST",
    body: JSON.stringify({ title, description }),
    headers: {
      "content-Type": "application/json",
    },
  });
  const data = await res.json();
}
router.push("/");
router.refresh()
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-2/4" onSubmit={handleSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Título de la tarea
        </label>
        <input
          type="text"
          onChange={(e)=> {setTitle(e.target.value)}}
          className="border border-gray-400 p-2 mb-4 w-full text-black "
          placeholder="Título"
          id="title"
          value={title}
        />
        <label htmlFor="Description" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          rows="3"
          onChange={(e)=> {setDescription(e.target.value)}}
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe tu tarea"
          id="description"
          value={description}
        ></textarea>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py2 px-4 rounded">
          Crear
        </button>
      </form>
    </div>
  );
}
export default NewPage;
