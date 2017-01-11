var Aluno = function (nome) {
  this.notas = []
  this.nome = nome
  this.definirNotas = function (...n) { this.notas = n }
  this.calcularMedia = function () {
    return this.notas.reduce((p, c) => p + c) / this.notas.length
  }
  this.estaAprovado = function () {
    return this.calcularMedia() >= 7
  }
}

module.exports = Aluno
