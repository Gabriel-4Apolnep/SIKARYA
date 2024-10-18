// Fungsi untuk memfilter berdasarkan kategori, tahun, dan pencarian
function filterByCategory() {
    const selectedCategory = document.getElementById('typeFilter').value;
    const selectedYear = document.getElementById('yearFilter').value;
    const query = document.getElementById('searchInput').value.toLowerCase(); // Ambil nilai pencarian

    const cards = document.querySelectorAll('.card-item');

    let anyVisible = false; // Untuk melacak apakah ada kartu yang terlihat

    cards.forEach(card => {
        const itemCategory = card.getAttribute('data-type');
        const itemYear = card.getAttribute('data-year');
        const title = card.querySelector('h3').innerText.toLowerCase(); // Ambil judul

        // Cek apakah kategori, tahun, dan pencarian cocok dengan filter
        const categoryMatch = selectedCategory === 'all' || itemCategory === selectedCategory;
        const yearMatch = selectedYear === 'all' || itemYear === selectedYear;
        const searchMatch = title.includes(query); // Pencarian berdasarkan judul

        // Tampilkan item jika semua filter cocok
        if (categoryMatch && yearMatch && searchMatch) {
            card.style.display = ""; // Tampilkan item
            anyVisible = true; // Set true jika ada yang terlihat
        } else {
            card.style.display = "none"; // Sembunyikan item
        }
    });

    // // Jika tidak ada kartu yang terlihat, bisa tampilkan pesan atau tetap dengan semua kartu
    if (!anyVisible) {
        console.log("Tidak ada item yang cocok dengan filter.");
    }
}

// Tambahkan event listener untuk filter
document.getElementById('typeFilter').addEventListener('change', filterByCategory);
document.getElementById('yearFilter').addEventListener('change', filterByCategory);
