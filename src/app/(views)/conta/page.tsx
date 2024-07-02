import Layout from "@/components/Layout";
import Titulo from "@/components/shared/Titulo";
import { IconArrowBadgeUpFilled, IconIcons, IconMoneybag } from "@tabler/icons-react";
// import ListaContas from "@/components/conta/ListaContas";
import useContas from "@/app/data/constants/hook/useContas";
// import FiltrarStatusConta from "@/components/shared/FiltrarStatusConta";
// import EstatisticaConta from "@/components/shared/EstatisticaConta";


export default function Conta(){
    // const { contas, filtrarContas, contaTotal } = useContas() 
    return(
        <Layout>
            <div className="flex items-center justify-around">
                <Titulo
                    principal="Contas a pagar"
                    secundario="Lista de contas"
                    icone={IconArrowBadgeUpFilled}
                />
                {/* <FiltrarStatusConta filtroMudou={filtrarContas} /> */}
            </div>

            <div className="flex">
                <div className="grid grid-cols gap-3 mt-5">
                    {/* <EstatisticaConta 
                        icone={IconMoneybag}
                        iconeCor="text-white"
                        valor={contaTotal}
                        text="Soma total"
                    /> */}
                </div>
                <div className="flex">
                    {/* <ListaContas contas={contas} /> */}
                </div>
            </div>
            
        </Layout>
    )
}