function calcularSustentabilidade() {
    // Pegando as caixas de seleção (checkboxes)
    const agua = document.getElementById('reusoAgua').checked;
    const energia = document.getElementById('energiaSolar').checked;
    const plantio = document.getElementById('plantioDireto').checked;

    let total = 0;

    // Somando os pontos de cada prática adotada
    if (agua) total += 30;
    if (energia) total += 30;
    if (plantio) total += 40;

    // Atualizando a barra de progresso visualmente
    const barra = document.getElementById('barra');
    barra.style.width = total + '%';
    barra.innerText = total + '%';

    // Alterando a cor da barra dependendo do nível
    if (total < 40) {
        barra.style.backgroundColor = '#e74c3c'; // Vermelho
    } else if (total < 100) {
        barra.style.backgroundColor = '#f39c12'; // Laranja
    } else {
        barra.style.backgroundColor = '#2ecc71'; // Verde
    }

    // Atualizando o texto de feedback
    const mensagem = document.getElementById('mensagem');
    if (total === 0) {
        mensagem.innerText = "Sua fazenda precisa adotar práticas sustentáveis!";
    } else if (total > 0 && total < 100) {
        mensagem.innerText = "Bom caminho! Adicione mais práticas para atingir o equilíbrio perfeito.";
    } else if (total === 100) {
        mensagem.innerText = "Parabéns! Sua fazenda alcançou o equilíbrio perfeito entre produção e meio ambiente! 🌱✨";
    }
}