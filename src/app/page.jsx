import { prisma } from "../libs/prisma";
import TaskCard from "../components/Card/TaskCard";

async function loadTask() {
  const data = await prisma.task.findMany();
  console.log(data);
  return data;
}
export const dynamic = 'force-dynamic'
async function HomePage({params}) {
  const task = await loadTask();
  return (
    <>
       <h1>Organizador de tareas Abuelo</h1>
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