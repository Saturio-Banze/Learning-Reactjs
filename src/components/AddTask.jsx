import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
    
    const [titulo, setTitulo] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-teal-50 rounded-md shadow-lg flex flex-col">
            
            <Input
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
                type="text"
                placeholder="Digite o titulo da tarefa"
            />
            
            <Input
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                type="text"
                placeholder="Digite o descrição da tarefa"
            />
            
            <button
                onClick={() => {
                    if (!titulo.trim() || !description.trim()) {
                        return alert('Preencha o titulo e a descrição da tarefa')
                    }
                    onAddTaskSubmit(titulo, description);
                    setTitulo('');
                    setDescription('');
                }}
                className="bg-teal-400 p-2 rounded-md text-white font-semibold"
            >
                Adicionar
            </button>
        </div>
    )
}

export default AddTask;