// Menu
const menu_toggle = document.querySelector(".menu-toggle");
const nav_links = document.querySelector(".nav-mobile .nav-links");

const abreMenu = () => {
  // Abrir o menu
  nav_links.classList.toggle("active");
  // Fechar o menu
};

menu_toggle.addEventListener("click", abreMenu);

// Formulário de Contato
const form = document.querySelector(".form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector(".btn-contato");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "2c1f72cb-d0fc-4c1f-894d-1ab9c54f22a6");

    const originalText = botao.textContent;

    botao.textContent = "Enviando...";
    botao.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        } else {
            alert("Erro ao enviar mensagem.");
        }

    } catch (error) {
        alert("Erro ao enviar mensagem.");
        console.error(error);
    } finally {
        botao.textContent = originalText;
        botao.disabled = false;
    }
});