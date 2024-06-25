import { Icon123, IconAdjustmentsCode, IconHome, IconRouterOff } from "@tabler/icons-react";
import Link from "next/link";
import { ElementType } from "react";

interface ItemMenuProps{
    icone: ElementType
    label: string
    url: string
}

function ItemMenu( props: ItemMenuProps ){
    return(
        <Link href={props.url} className="flex gap-3 px-3 py-3 hover:bg-zinc-900 text-2xl" >
            <props.icone className="text-zinc-200" size={25} />
            <span className="text-zinc-200">{props.label}</span>
        </Link>
    )
}

export default function Menu(){
    return(
        <aside className="w-56 bg-blue-700 h-screen">
            <nav className="flex flex-col gap-2 py-2 px-3">
                <ItemMenu icone={IconHome} label="Produtos" url="/produto" />
                <ItemMenu icone={Icon123} label="Clientes" url="/cliente" />
                <ItemMenu icone={IconAdjustmentsCode} label="Funcionários" url="/funcionario" />
                <ItemMenu icone={IconRouterOff} label="Sair" url="/" />
            </nav>
        </aside>
    )
}