// Exporta a classe Database para que possa ser importada em outros arquivos
export class Database {
	// Inicializa um objeto vazio chamado database para armazenar os dados
	database = {};

	// Método select para obter dados de uma tabela específica
	select(table) {
		// Verifica se a tabela existe no objeto database
		// Se existir, retorna os dados da tabela, caso contrário, retorna um array vazio
		const data = this.database[table] ?? [];
		return data;
	}

	// Método insert para inserir dados em uma tabela específica
	insert(table, data) {
		// Verifica se a tabela já existe e se é um array
		if (Array.isArray(this.database[table])) {
			// Se for um array, adiciona os novos dados ao final do array
			this.database[table].push(data);
		} else {
			// Se a tabela não existir, cria um novo array com os dados fornecidos
			this.database[table] = [data];
		}

		return data;
	}
}
