// Script para slider de promoções
const promoItems = document.querySelector('.promo-items');
const promoSlides = document.querySelectorAll('.promo-item');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// Função para mostrar o slide atual
function showSlide(index) {
    promoItems.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % promoSlides.length;
    showSlide(currentIndex);
}

// Função para voltar para o slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + promoSlides.length) % promoSlides.length;
    showSlide(currentIndex);
}

// Eventos de clique nos botões de navegação
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Transição automática entre slides
setInterval(nextSlide, 5000);

// Indicadores de slide clicáveis
indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

// Botão voltar ao topo
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
