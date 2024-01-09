// Definindo a classe `ClienteService`
class ClienteService {
  // Construtor da classe
  constructor() {
    // Inicializando a lista de clientes vazia
    this.clientes = [];
  }

  // Método para obter todos os clientes
  obterTodosClientes() {
    // Retorna a lista completa de clientes
    return this.clientes;
  }

  // Método para obter um cliente por ID
  obterClientePorId(id) {
    // Utiliza o método `find` para encontrar um cliente com o ID fornecido na lista
    return this.clientes.find((cliente) => cliente.id === id);
  }

  // Método para salvar um cliente
  salvarCliente(cliente) {
    // Verifica se o cliente já possui um ID (ou seja, se já existe na lista)
    if (cliente.id) {
      // Se existe, encontra o índice desse cliente na lista
      const index = this.clientes.findIndex((c) => c.id === cliente.id);
      // Atualiza o cliente existente com os novos dados
      this.clientes[index] = cliente;
    } else {
      // Se o cliente não tem um ID, é considerado um novo cliente
      // Gera um novo ID com base no comprimento da lista e adiciona o novo cliente à lista
      const novoCliente = { id: this.clientes.length + 1, ...cliente };
      this.clientes.push(novoCliente);
    }
  }

  // Método para alternar o status "ativo" de um cliente
  toggleAtivoCliente(id) {
    // Encontra o cliente na lista com base no ID fornecido
    const cliente = this.clientes.find((c) => c.id === id);
    // Se o cliente for encontrado, inverte o valor da propriedade "ativo"
    if (cliente) {
      cliente.ativo = !cliente.ativo;
    }
  }
}

// Exporta a classe `ClienteService` para que ela possa ser utilizada em outros arquivos
export default ClienteService;
