function criarCampos() {
    // Obtém o valor selecionado no campo select
    const quantidade = document.getElementById('quantidade').value;
    // Obtém o container onde os campos serão adicionados
    const container = document.getElementById('camposContainer');
    // Limpa o container de campos existentes
    container.innerHTML = '';

    // Cria o número de campos de texto especificado
    for (let i = 0; i < quantidade; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'campo-texto';
        input.placeholder = 'Campo de texto ' + (i + 1);
        container.appendChild(input);
        container.appendChild(document.createElement('br')); // Adiciona uma quebra de linha após cada campo
    }
}
