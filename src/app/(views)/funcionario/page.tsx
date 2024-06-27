import Layout from "@/components/Layout";
import ListaUsuario from "@/components/usuario/ListaUsuario";

export default function Funcionario(){
    return(
        <Layout>
            <h1 className="text-3xl pb-3">Funcionários</h1>
            <ListaUsuario />
        </Layout>
    )
}