import Conta from "@/core/model/Conta";
import { useState } from "react";
import listaContas from "../listaContas";


export default function useContas(){
    const [contas, setContas] = useState<Conta[]>(listaContas)

}