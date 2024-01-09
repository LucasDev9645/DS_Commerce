// Definindo a classe `AssociacaoService`
class AssociacaoService {
  // Construtor da classe
  constructor() {
    // Inicializando a lista de associações vazia
    this.associacoes = [];
  }

  // Método para associar produtos a um cliente
  associarProdutosAoCliente(clienteId, produtosIds) {
    // Criando um objeto de associação com o ID do cliente e IDs dos produtos
    const associacao = { clienteId, produtosIds };
    // Adicionando a associação à lista de associações
    this.associacoes.push(associacao);
  }

  // Método para obter produtos associados a um cliente
  obterProdutosAssociadosAoCliente(clienteId) {
    // Filtrando as associações para encontrar aquelas associadas ao cliente com o ID fornecido
    return (
      this.associacoes
        .filter((associacao) => associacao.clienteId === clienteId)
        // Aplanando a lista de IDs de produtos das associações filtradas
        .flatMap((associacao) => associacao.produtosIds)
    );
  }
}

// Exporta a classe `AssociacaoService` para que ela possa ser utilizada em outros arquivos
export default AssociacaoService;
