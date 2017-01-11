require('./arrayUtils')

let alunosSalvos = []

var diarioDeAlunos = {
  salvar: function (...aluno) {
    aluno.map(el => alunosSalvos.push(el))
  },

  listarTodos: function () {
    return alunosSalvos
  },

  listarAlunosAprovados: function () {
    return alunosSalvos.filter(aluno => aluno.estaAprovado())
  },

  obterMediaDosAlunosAprovados: function () {
    let alunosAprovados = this.listarAlunosAprovados()
    return alunosAprovados.sum('notas') / alunosAprovados.count('notas')
  }
}

module.exports = diarioDeAlunos
