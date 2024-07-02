export default interface Conta{
    id: string;
    nome: string;
    descricao: string;
    valor: string;
    data: string;
    tipo_pag: 'dinheiro' | 'pix' | 'boleto' | 'cartão';
    status: 'pago' | 'vencida' | 'em dias' | 'receber';
}