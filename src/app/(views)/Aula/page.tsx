'use client'

import Layout from "@/components/Layout";
import ListaAulas from "@/components/aula/ListaAulas";
import FiltrarStatus from "@/components/shared/FiltrarStatus";
import Titulo from "@/components/shared/Titulo";
import Aula from "@/core/model/Aula";
import { IconVideo } from "@tabler/icons-react";
import listaDeAulas from "@/app/data/constants/aulas";
import { useState } from "react";

export default function Cadastro(){
    const [aulas, setAulas] = useState<Aula[]>(listaDeAulas)

    function filtrarAulas(status?: string | null){
        
        const aulasFiltradas: Aula[] = listaDeAulas.filter( 
            (aula) => aula.status === status || !status 
        )
        setAulas(aulasFiltradas)
        // console.log(status)
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
            <ListaAulas aulas={aulas} />
        </Layout>
    )
}