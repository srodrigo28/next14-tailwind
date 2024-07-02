import Conta from "@/core/model/Conta";

interface LinhaContaProps{
    conta: Conta
}

interface ListaContaProps{
    contas: Conta[]
}

function LinhaConta(props: LinhaContaProps) {
    return(
        <div className="flex p-3 items-center justify-between rounded-lg bg-blue-700 text-white">
            <div className="flex flex-col">
                <span className="text-2xl font-bold">{props.conta.nome}</span>  
                <span>{props.conta.descricao}</span>
            </div>
            <div className="flex items-center gap-10 text-1xl font-extrabold">
                <span>{props.conta.status}</span>
                <span>{props.conta.valor}</span>
            </div>
        </div>
    )
}

export default function ListaContas(props: ListaContaProps){
    return(
        <div className="mt-3">
            <div className="flex flex-col gap-3">
                {props.contas.map(function (item: Conta){
                    return <LinhaConta key={item.id} conta={item} />
                })}
            </div>
        </div>
    )
}