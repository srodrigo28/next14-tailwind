'use client'

import { useEffect, useState } from "react";
import { IconClock, IconVideo } from "@tabler/icons-react";

import Aula from "@/core/model/Aula";
import Layout from "@/components/Layout";
import Duracao from "@/core/utils/Duracao";
import Titulo from "@/components/shared/Titulo";
import ListaAulas from "@/components/aula/ListaAulas";
import listaDeAulas from "@/app/data/constants/aulas";
import Estatistica from "@/components/shared/Estatistica";
import FiltrarStatus from "@/components/shared/FiltrarStatus";

export default function Cadastro(){
    const [aulas, setAulas] = useState<Aula[]>(listaDeAulas)
    const [duracaoTotal, setDuracaoTotal] = useState<number>(0)

    function filtrarAulas(status?: string | null){
        
        const aulasFiltradas: Aula[] = listaDeAulas.filter( 
            (aula) => aula.status === status || !status 
        )
        setAulas(aulasFiltradas)
        // console.log(status)
    }

    useEffect(() => {
        calcularDuracaoTotal(aulas)
    }, [aulas])

    function calcularDuracaoTotal(aulas: Aula[]){
        const duracaoTotal = aulas.reduce((acc, aula) => acc + aula.duracao, 0)
        setDuracaoTotal(duracaoTotal)
    }

    return(
        <Layout>
            <div className="flex items-center justify-around">
                <Titulo
                    principal="Acervo de cursos"
                    secundario="Lista de aulas"
                    icone={IconVideo}
                />
                <FiltrarStatus filtroMudou={filtrarAulas} />
            </div>

            <div className="flex flex-col">
                <div className="grid grid-cols-4 gap-3 mt-5">
                    <Estatistica 
                        icone={IconClock} 
                        iconeCor="text-white"
                        valor={Duracao.formatar(duracaoTotal)}
                        text="Duração total" 
                    />
                </div>
                <ListaAulas aulas={aulas} />
            </div>
        </Layout>
    )
}