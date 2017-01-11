var Aluno = require('./Aluno')
var DiarioDeAlunos = require('./DiarioDeAlunos')

var joao = new Aluno('joao')
var pedro = new Aluno('pedro')
var bruna = new Aluno('bruna')

joao.definirNotas(1, 4, 7)
pedro.definirNotas(5, 8, 9)
bruna.definirNotas(10, 6, 10)

DiarioDeAlunos.salvar(joao, pedro, bruna)

let todosAlunos = DiarioDeAlunos.listarTodos()
let alunosAprovados = DiarioDeAlunos.listarAlunosAprovados()

console.log('Nomes dos alunos: ' + todosAlunos.map(x => x.nome))
console.log('Alunos Aprovados: ' + alunosAprovados.map(x => x.nome))
console.log('média dos alunos aprovados: ' + DiarioDeAlunos.obterMediaDosAlunosAprovados())
