'use client'

import { IconClock, IconVideo } from "@tabler/icons-react";

import Layout from "@/components/Layout";
import Duracao from "@/core/utils/Duracao";
import Titulo from "@/components/shared/Titulo";
import ListaAulas from "@/components/aula/ListaAulas";
import Estatistica from "@/components/shared/Estatistica";
import FiltrarStatus from "@/components/shared/FiltrarStatus";
import useAulas from "@/app/data/constants/hook/useAulas";

export default function Cadastro(){
    const { aulas, duracaoTotal, filtrarAulas } = useAulas() 
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