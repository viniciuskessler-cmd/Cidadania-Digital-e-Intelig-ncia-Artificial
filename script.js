
// Garante a execução segura após a renderização completa da árvore DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // Captura dos elementos para manipulação dinâmica de interface
    const themeToggleBtn = document.getElementById("theme-toggle");
    const quizForm = document.getElementById("quiz-form");
    const quizFeedback = document.getElementById("quiz-feedback");

    // --- Sistema Dinâmico de Acessibilidade (Modo Escuro) ---
    themeToggleBtn.addEventListener("click", () => {
        // Analisa o estado atual do atributo de tema no HTML
        const currentTheme = document.documentElement.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            themeToggleBtn.textContent = "🌓 Modo Escuro";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️ Modo Claro";
        }
    });

    // --- Processamento Lógico e Validação do Quiz ---
    quizForm.addEventListener("submit", (event) => {
        // Interrompe o recarregamento automático da página
        event.preventDefault();

        // Armazena temporariamente a escolha do usuário em uma variável de controle
        const selectedOption = document.querySelector('input[name="quiz-answer"]:checked');

        // Reseta as classes de renderização anteriores da caixa de feedback
        quizFeedback.classList.remove("hidden", "correct", "wrong");

        // Avalia logicamente a variável capturada e altera o DOM textualmente e visualmente
        if (selectedOption.value === "correto") {
            quizFeedback.textContent = "✅ Excelente! Investigar fontes e canais oficiais é a melhor proteção contra a desinformação por IA.";
            quizFeedback.classList.add("correct");
        } else {
            quizFeedback.textContent = "❌ Atenção! Compartilhar mídias suspeitas ajuda a propagar redes de desinformação automatizada. Sempre verifique antes.";
            quizFeedback.classList.add("wrong");
        }
    });
});
