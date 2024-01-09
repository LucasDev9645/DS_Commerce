// Definindo a classe `ProdutoService`
class ProdutoService {
  // Construtor da classe
  constructor() {
    // Inicializando a lista de produtos vazia
    this.produtos = [];
  }

  // Método para obter todos os produtos
  obterTodosProdutos() {
    // Retorna a lista completa de produtos
    return this.produtos;
  }

  // Método para obter um produto por ID
  obterProdutoPorId(id) {
    // Utiliza o método `find` para encontrar um produto com o ID fornecido na lista
    return this.produtos.find((produto) => produto.id === id);
  }

  // Método para salvar um produto
  salvarProduto(produto) {
    // Verifica se o produto já possui um ID (ou seja, se já existe na lista)
    if (produto.id) {
      // Se existe, encontra o índice desse produto na lista
      const index = this.produtos.findIndex((p) => p.id === produto.id);
      // Atualiza o produto existente com os novos dados
      this.produtos[index] = produto;
    } else {
      // Se o produto não tem um ID, é considerado um novo produto
      // Gera um novo ID com base no comprimento da lista e adiciona o novo produto à lista
      const novoProduto = { id: this.produtos.length + 1, ...produto };
      this.produtos.push(novoProduto);
    }
  }

  // Método para alternar o status "ativo" de um produto
  toggleAtivoProduto(id) {
    // Encontra o produto na lista com base no ID fornecido
    const produto = this.produtos.find((p) => p.id === id);
    // Se o produto for encontrado, inverte o valor da propriedade "ativo"
    if (produto) {
      produto.ativo = !produto.ativo;
    }
  }
}

// Exporta a classe `ProdutoService` para que ela possa ser utilizada em outros arquivos
export default ProdutoService;
