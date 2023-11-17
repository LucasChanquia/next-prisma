
import { prisma } from "../libs/prisma";
import TaskCard from "../components/Card/TaskCard";


async function loadTask() {
  const data = await prisma.task.findMany();
  return data;
}


async function HomePage ({params}) {
  const task = await loadTask();

  return (
    <>
      <h1 className="font-bold text-2xl py-5 mx-3">Organizador de tareas Abuelo</h1>
      <section className="container mx-auto">
        <div className="grid grid-cols-3 gap-3 w-auto h-auto">
          {task?.map((elem) => (
            <TaskCard elem={elem} key={elem.id} params={params} />
          ))}
        </div>
      </section>
    </>
  );
          }

export default HomePage;
