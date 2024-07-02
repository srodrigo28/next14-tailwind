import Conta from "@/core/model/Conta";
import { useEffect, useState } from "react";
import listaContas from "../listaContas";


export default function useContas(){
    const [contas, setContas] = useState<Conta[]>(listaContas)
    const [contaTotal, setContaTotal] = useState<number>(0)

    function filtrarContas(status?: string | null){

        const contaFiltrada: Conta[] = listaContas.filter(
            (conta) => conta.status === status || !status
        )
        setContas(contaFiltrada)
    }

    useEffect(() => {
        calcularContaTotal(contas)
    }, [contas])

    function calcularContaTotal(contas: Conta[]){
        const contaTotal = contas.reduce((acc, conta) => acc + conta.valor, 0)
        setContaTotal(contaTotal)
    }

    return{
        contas,
        contaTotal,
        filtrarContas,
        calcularContaTotal,
    }
}