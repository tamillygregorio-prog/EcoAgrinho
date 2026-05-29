document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFEITO DE SCROLL NO MENU (HEADER)
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });

    // 2. ANIMAÇÃO DE APARECIMENTO (FADE-IN) DOS TÍTULOS
    const sectionTitles = document.querySelectorAll(".section-title, .card");

    sectionTitles.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sectionTitles.forEach(element => observer.observe(element));

    // 3. EVENTO DO FORMULÁRIO DE CONTATO
    const form = document.getElementById("form-contato");
    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Impede o recarregamento da página
            
            const nome = document.getElementById("nome").value;
            
            // Simulação de envio com feedback visual
            alert(`Obrigado pelo contato, ${nome}! Juntos somos mais fortes pelo Agro Sustentável.`);
            form.reset();
        });
    }
});
