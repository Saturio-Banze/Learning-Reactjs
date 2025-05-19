import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid";
import { useEffect } from "react";


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [] 
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  /*useEffect(() => {
    
    const fetchTasks = async () => {
       // Chamar Api
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
        method: 'GET',
      });
      
      // Pegar dados retornados por ela(API)
      const data = await response.json();

      // Armazenar/Percistir esses dados no STATE
      setTasks(data);
    }

    // fetchTasks();

  }, [])*/


  function onAddTaskSubmit(titulo, description) {
    const newTask = {
      id: v4(),
      titulo: titulo,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask])
  }

  function onDeleteTaskClicked(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);

  }

  function onTaskClicked(taskId) {
    const newTask = tasks.map((task) => {
      // Atualizar a tarefa
      if (task.id === taskId) {
        return{...task, isCompleted: !task.isCompleted} 
      }
      // Nao atualizar a tarefa
      return task; 
    })

    setTasks(newTask);
  }

 

  return (
    <div className="w-screen h-screen bg-[#f1f1f1] flex justify-center p-6">
      <div className="w-[500px] space-y-6">
        <h1 className="text-3xl text-gray-950 text-center font-bold">Lista de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClicked={onTaskClicked} onDeleteTaskClicked={onDeleteTaskClicked} />
      </div>
    </div>
  );

}

export default App;