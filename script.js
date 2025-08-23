// Функция для генерации карточек товаров
function generateProductCards(amount, container, startFrom = 0) {
    // Очищаем контейнер перед добавлением новых карточек (актуально для других страниц)
    container.innerHTML = '';

    for (let i = 1 + startFrom; i <= amount + startFrom; i++) {
        // Создаем случайную цену от 1500 до 4500, кратную 100
        const randomPrice = (Math.floor(Math.random() * 30) + 15) * 100;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">Фото тапка ${i}</div>
            <div class="product-price">${randomPrice}</div>
        `;
        container.appendChild(card);
    }
}

// Можно добавить другие скрипты, например, для оживления меню или плавного скролла
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт "Tapochki" загружен!');
});