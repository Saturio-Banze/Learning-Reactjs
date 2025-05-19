import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TasKPage() {
    const navegar = useNavigate();
    const [searchParams] = useSearchParams();
    const titulo = searchParams.get('titulo');
    const description = searchParams.get('description');

    return (
        <div className="w-screen h-screen bg-[#f1f1f1] p-6">
            <div className="w-[500px] space-y-6">
                <div className="flex justify-center relative mb-6">
                    <button
                        onClick={()=> navegar(-1)}
                        className="absolute left-0 top-0 bottom-0 bg-black text-white rounded-xl hover:bg-teal-50 hover:text-black"
                    >
                        <ChevronLeftIcon/>
                    </button>
                    
                    <h1 className="text-3xl text-gray-950 text-center font-bold">Tarefa da Tarefa</h1>
                </div>
                
            
                <div className="space-y-4 p-6 bg-white rounded-md shadow-lg flex flex-col">
                    <h1 className="text-xl text-black font-bold">{titulo}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TasKPage;