const carousel = document.querySelector('.carousel');
const scrollInterval = 3000; // Tempo de rolagem automática (3 segundos)
const scrollAmount = 220; // Quantidade a ser rolada em pixels

// Função de rolagem automática
function autoScroll() {
    carousel.scrollBy({
        left: scrollAmount, // Rolagem para a direita
        behavior: 'smooth' // Transição suave
    });

    // Verifica se chegou ao final e, se sim, volta para o início
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
    }
}

// Inicia a rolagem automática
let autoScrollInterval = setInterval(autoScroll, scrollInterval);

// Faz com que a rolagem automática pare ao passar o mouse
carousel.addEventListener('mouseover', () => {
    clearInterval(autoScrollInterval);
});

// Reinicia a rolagem automática ao sair com o mouse
carousel.addEventListener('mouseout', () => {
    autoScrollInterval = setInterval(autoScroll, scrollInterval);
});
