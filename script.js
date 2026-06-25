// Aguarda o carregamento completo do DOM para evitar erros de execução
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Seleção de Elementos do DOM ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    const quizForm = document.getElementById("quiz-form");
    const quizFeedback = document.getElementById("quiz-feedback");

    // --- Funcionalidade 1: Controle de Acessibilidade (Modo Escuro) ---
    themeToggleBtn.addEventListener("click", () => {
        // Verifica qual o tema atual do documento HTML
        const currentTheme = document.documentElement.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            themeToggleBtn.textContent = "🌓 Modo Escuro";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️ Modo Claro";
        }
    });

    // --- Funcionalidade 2: Validador do Quiz Anti-Desinformação ---
    quizForm.addEventListener("submit", (event) => {
        // Evita o recarregamento padrão da página ao enviar o formulário
        event.preventDefault();

        // Armazena a opção selecionada pelo usuário em uma variável de processamento
        const selectedOption = document.querySelector('input[name="quiz-answer"]:checked');

        // Remove classes antigas de feedback para atualização limpa
        quizFeedback.classList.remove("hidden", "correct", "wrong");

        // Processa a informação capturada do formulário
        if (selectedOption.value === "correto") {
            quizFeedback.textContent = "✅ Excelente! Checar fontes e canais oficiais é a melhor arma contra a desinformação por IA.";
            quizFeedback.classList.add("correct");
        } else {
            quizFeedback.textContent = "❌ Atenção! Compartilhar conteúdos suspeitos propaga pânico e desinformação automatizada. Sempre verifique antes.";
            quizFeedback.classList.add("wrong");
        }
    });
});
