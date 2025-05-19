import { CheckIcon, ChevronFirst, ChevronRightIcon, DeleteIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {

    const navegar = useNavigate();

    function verDetalhesTarefa(task) {
        const query = new URLSearchParams();
        query.set('titulo', task.titulo);
        query.set('description', task.description);
        navegar(`/task?titulo=${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-teal-50 rounded-md shadow-lg">
            {props.tasks.map((task) =>  (
                <li key={task.id} className="flex gap-2">
                    
                    <button onClick={() => props.onTaskClicked(task.id)} className={`flex items-center gap-2 w-full bg-teal-300 text-left text-gray-950 p-2 rounded-md ${task.isCompleted && 'line-through'}`}>
                        {task.isCompleted && <CheckIcon/>}
                        {task.titulo}
                    </button>
                    <Button
                        onClick={()=>verDetalhesTarefa(task)}
                    >
                        <ChevronRightIcon />
                    </Button>
                    <Button onClick={()=> props.onDeleteTaskClicked(task.id)}>
                        <Trash2 />
                    </Button>
                </li>
            ))}
        </ul>
    ); 
}

export default Tasks;