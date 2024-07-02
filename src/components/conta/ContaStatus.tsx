import Conta from "@/core/model/Conta";
import { IconCircleFilled } from "@tabler/icons-react";

export interface StatusContaProps{
    valor: Conta['status']
    semEstilo?: boolean
    onClick?: ( status: string ) => void
}

export default function StatusConta(props: StatusContaProps){
    function cor(){
        switch(props.valor){
            case 'pago':
                return '#32CD32';
            case 'vencida':
                return '#FF0000';
            case 'em dias':
                return '#FFA500';
            case'receber':
                return '#4320cc';
            default:
                return '#fff';
        }
    }
    return(
        <div className={`
            flex items-center gap-2 hover:bg-gray-800 p-2
            ${props.semEstilo ? '' : 'w-36 py-2 rounded-xl bg-black text-white'}
        `}
        onClick={ () => props.onClick?(props.valor)}
        >
        <IconCircleFilled size={15} className={cor()} />
            <span className={cor()}>{props.valor}</span>
        </div>
    )
}

