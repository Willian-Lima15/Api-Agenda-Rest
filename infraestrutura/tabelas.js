class Tabelas {
    init(conexao) {
        this.conexao = conexao
    }

    criarAtendimento() {
        const sql = 'CREATE TABLE Atendimentos (id int NOT NULL AUTO_INCREMENTE, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20 NOT NULL))'

        this.conexao.query()
    }
}

module.exports = new Tabelas