

/* --- Identidade Visual Tecnológica e Variáveis de Cores --- */
:root {
    --bg-primary: #f8fafc;
    --bg-card: #ffffff;
    --text-main: #0f172a;
    --text-secondary: #475569;
    --accent-color: #2563eb;
    --accent-hover: #1d4ed8;
    --border-color: #e2e8f0;
    --success-bg: #d1fae5;
    --success-text: #065f46;
    --success-border: #10b981;
    --error-bg: #fee2e2;
    --error-text: #991b1b;
    --error-border: #ef4444;
}

/* Variáveis para o Modo Escuro */
[data-theme="dark"] {
    --bg-primary: #0f172a;
    --bg-card: #1e293b;
    --text-main: #f8fafc;
    --text-secondary: #cbd5e1;
    --accent-color: #3b82f6;
    --accent-hover: #60a5fa;
    --border-color: #334155;
}

/* --- Reset Geral --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-main);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* --- Alinhamento com Flexbox --- */
.main-header {
    background-color: var(--bg-card);
    border-bottom: 1px solid var(--border-color);
    padding: 1.2rem 2rem;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
}

h1 span {
    color: var(--accent-color);
}

.content-container {
    max-width: 750px;
    margin: 3rem auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

/* --- Estilização dos Cards --- */
.intro-section, .quiz-section {
    background-color: var(--bg-card);
    padding: 2.5rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

h2 {
    margin-bottom: 1.2rem;
    color: var(--accent-color);
}

.quiz-scenario {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}

/* --- Opções do Quiz --- */
.options-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
}

.quiz-option {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
}

/* Efeito Hover Suave */
.quiz-option:hover {
    border-color: var(--accent-color);
    background-color: rgba(37, 99, 235, 0.04);
}

/* Estilo visual quando a opção de rádio está marcada */
.quiz-option:has(input:checked) {
    border-color: var(--accent-color);
    background-color: rgba(37, 99, 235, 0.08);
}

/* Customização dos Inputs de Rádio */
.quiz-option input[type="radio"] {
    width: 1.2rem;
    height: 1.2rem;
    accent-color: var(--accent-color);
    cursor: pointer;
}

/* --- Botões --- */
.btn-toggle, .btn-submit {
    background-color: var(--accent-color);
    color: #ffffff;
    border: none;
    padding: 0.8rem 1.6rem;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-toggle:hover, .btn-submit:hover {
    background-color: var(--accent-hover);
}

.btn-submit:active {
    transform: scale(0.98);
}

/* --- Classes de Feedback Dinâmico --- */
.hidden {
    display: none !important;
}

.feedback-box {
    margin-top: 1.5rem;
    padding: 1.2rem;
    border-radius: 8px;
    font-weight: bold;
    text-align: center;
    animation: fadeIn 0.3s ease-in-out;
}

.feedback-box.correct {
    background-color: var(--success-bg);
    color: var(--success-text);
    border: 1px solid var(--success-border);
}

.feedback-box.wrong {
    background-color: var(--error-bg);
    color: var(--error-text);
    border: 1px solid var(--error-border);
}

/* --- Rodapé --- */
.main-footer {
    text-align: center;
    padding: 2.5rem;
    font-size: 0.95rem;
    border-top: 1px solid var(--border-color);
    margin-top: 5rem;
    color: var(--text-secondary);
}

/* Animação suave para o feedback */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* --- Responsividade (Media Queries) --- */
@media (max-width: 650px) {
    .header-container {
        flex-direction: column;
        gap: 1.2rem;
        text-align: center;
    }
    
    .intro-section, .quiz-section {
        padding: 1.5rem;
    }
}
