function filterByCategory() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const itemCategory = card.getAttribute('data-category');

        if (selectedCategory === 'all' || itemCategory === selectedCategory) {
            card.style.display = ""; // Tampilkan item
        } else {
            card.style.display = "none"; // Sembunyikan item
        }
    });
}
