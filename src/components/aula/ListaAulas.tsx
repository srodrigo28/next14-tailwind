import Aula from "@/core/model/Aula";
import aulas from "./aulas";
import Duracao from "@/core/utils/Duracao";

interface LinhaAUlaProps{
    aula: Aula
}

function LinhaAula(props : LinhaAUlaProps){
    return(
        <div className="flex p-3 items-center justify-between rounded-lg bg-blue-700 text-white">
           <div className="flex flex-col">
                <span className="text-2xl font-bold">{props.aula.id} - {props.aula.nome}</span>
                <span className="text-zinc-400">{props.aula.curso}</span>
           </div>
           <div className="text-3xl font-extrabold">
                {Duracao.formatar(props.aula.duracao)}
           </div>
        </div>
    )
}

export default function ListaAulas(){
    return(
        <div className="mt-3">
            <div className="flex flex-col gap-3">
                {aulas.map(function (aula: Aula) {
                    return <LinhaAula key={aula.id} aula={aula} />
                })}
            </div>
        </div>
    )
}