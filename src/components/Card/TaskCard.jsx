"use client";
import { useRouter } from "next/navigation";

function TaskCard({ elem }, { params }) {
  console.log(params);
  const routes = useRouter();

  async function handleDelete() {
    await fetch(`/api/task/${elem.id}`, {
      method: "DELETE",
    });
    routes.refresh();
  }
  return (
    <>
      <div key={elem.id} className="bg-slate-900 p-3 hover:bg-slate-800">
        <div className="flex flex-col justify-between w-full h-full">
          <h3 className="font-bold text-2xl mb-2">{elem.title}</h3>
          <p className="">{elem.description}</p>
          <p className="text-sm text-gray-500 pt-2 pb-4">
            {new Date(elem.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex justify-between w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            onClick={() => {
              routes.push("./task/edit/" + elem.id);
            }}
          >
            Editar
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
