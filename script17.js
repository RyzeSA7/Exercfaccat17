let horaInicio = parseInt(prompt("Digite a hora de início do jogo (0-23):"))
let horaFim = parseInt(prompt("Digite a hora de fim do jogo (0-23):"))

// Calcular a duração do jogo
let duracao;
if (horaFim >= horaInicio) {
    duracao = horaFim - horaInicio
} else {
    duracao = 24 - horaInicio + horaFim
}

// Exibir a duração do jogo
console.log(`A duração do jogo é de ${duracao} horas.`)