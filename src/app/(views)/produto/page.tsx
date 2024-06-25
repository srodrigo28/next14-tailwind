import Header from "@/components/Header";
import Layout from "@/components/Layout";

export default function Produto(){
    return(
        <Layout>
            <Header title="Produtos"/>

            <form className="p-5 flex flex-1 gap-3 flex-wrap bg-blue-400 text-black font-bold text-2xl rounded-md mt-5">
                <input type="text" placeholder="nome do produto" className="p-3 outline-none rounded-md"  />
                <input type="text" placeholder="Descrição" className="p-3 outline-none rounded-md"  />
                <input type="text" placeholder="qtd" className="p-3 outline-none rounded-md w-36"  />
                <input type="text" placeholder="Valor" className="p-3 outline-none rounded-md w-36"  />
                <button className="bg-green-700 hover:bg-green-400 p-4 rounded-md text-white">Cadastrar</button>
            </form>
        </Layout>
    )
}