import Conta from "@/core/model/Conta";

const listaContas: Conta[] = [
    {
        id: "1",
        nome: "Saldo Bancário",
        descricao: "Conta Corrente",
        valor: "1000",
        data: "2022-12-31",
        status: 'em dias',
        tipo_pag: 'dinheiro'

    },
    {
        id: "2",
        nome: "Conta Poupança",
        descricao: "Conta Poupança",
        valor: "500",
        data: "2023-03-31",
        status: 'receber',
        tipo_pag: 'boleto'
    }
]

export default listaContas;