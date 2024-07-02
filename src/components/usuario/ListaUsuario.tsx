import usuarios from "@/app/data/constants/usuarios";
import { Usuario } from "@/core/model/Usuario";
import Image from "next/image";

interface LinhaUsuarioProps{
    usuario: Usuario
}

function LinhaUsuario(props: LinhaUsuarioProps){
    return(
        <div className="p-3 bg-blue-600 mb-3 rounded-md hover:bg-blue-800">
            <div className="flex gap-2">
                <Image
                    src="https://media.istockphoto.com/id/1321856038/pt/foto/portrait-beautiful-young-woman-with-clean-fresh-skin.webp?b=1&s=170667a&w=0&k=20&c=vFLzgzCXVnZku-zspzTFijmt-QnFaYZZtDJi1V_TscY="
                    alt=""
                    width={50}
                    height={100}
                    className="rounded-full"
                />
                <div className="flex flex-col">
                    <span className="text-2xl text-white font-bold">{props.usuario.nome}</span>
                    <span className="text-sm text-white">{props.usuario.email}</span>
                </div>
            </div>
        </div>
    )
}

export default function ListaUsuario(){
    return(
        <div className="flex flex-col">
            {usuarios.map( (usuario: Usuario) => {
                return <LinhaUsuario key={usuario.id} usuario={usuario} />
            })}
        </div>
    )
}