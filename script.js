function verificarResposta() {
    const form = document.getElementById('quizForm');
    const feedback = document.getElementById('feedback');
    const audioCorreto = document.getElementById('audio-correto');
audioCorreto.play();

    
    // Verifica se uma opção foi selecionada
    const selectedAnswer = form.querySelector('input[name="resposta"]:checked');
    
    if (selectedAnswer) {
        // Verifica se a resposta está correta ou errada
        if (selectedAnswer.value === 'correto') {
            feedback.textContent = 'Resposta correta! Ótimo trabalho.';
            feedback.className = 'feedback correct';
            feedback.style.opacity = 1; // Torna o feedback visível

            // Se for a última página, redireciona para a página de Parabéns
            if (window.location.pathname.includes('page06.html')) {
                setTimeout(() => {
                    window.location.href = 'finalpage.html'; // Página de Parabéns
                }, 1000); // Aguarda 1 segundo para mostrar o feedback
            } else {
                // Caso não seja a última página, redireciona para a próxima página
                setTimeout(() => {
                    window.location.href = 'page03.html'; // Próxima página
                }, 1000); // Espera 1 segundo
            }
        } else {
            feedback.textContent = 'Resposta errada. Tente novamente.';
            feedback.className = 'feedback incorrect';
            feedback.style.opacity = 1;
        }
    } else {
        // Caso nenhuma resposta seja selecionada
        feedback.textContent = 'Por favor, selecione uma resposta.';
        feedback.className = 'feedback incorrect';
        feedback.style.opacity = 1;
    }
}

// Função para verificar a resposta
function verificarResposta(resposta) {
    const feedback = document.getElementById('feedback');
    const navigationButtons = document.getElementById('navigationButtons');
    
    // Limpa o feedback anterior
    feedback.textContent = '';
    feedback.classList.remove('correct', 'incorrect');

    // Desabilita todos os botões de resposta após a seleção
    const buttons = document.querySelectorAll('.response-button');
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Verifica a resposta
    if (resposta === 'correto') {
        // Se a resposta for correta
        feedback.textContent = 'Você acertou! Boa resposta.';
        feedback.classList.add('correct');
        
        // Exibe os botões de navegação após a resposta correta
        navigationButtons.style.visibility = 'visible';
    } else {
        // Se a resposta for errada
        feedback.textContent = 'Resposta errada. Tente novamente!';
        feedback.classList.add('incorrect');
        
        // Reabilita os botões de resposta para uma nova tentativa
        buttons.forEach(button => {
            button.disabled = false;
        });
    }
}
