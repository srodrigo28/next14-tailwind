import Layout from "@/components/Layout";
import ListaAulas from "@/components/aula/ListaAulas";
import Titulo from "@/components/shared/Titulo";
import { IconVideo } from "@tabler/icons-react";

export default function Cadastro(){
    return(
        <Layout>
            <Titulo
                principal="Acervo de cursos"
                secundario="Lista de aulas"
                icone={IconVideo}
            />
            <ListaAulas />
        </Layout>
    )
}