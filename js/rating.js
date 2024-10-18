
    // Ambil semua elemen bintang
    const stars = document.querySelectorAll('.star');
    const ratingValueDisplay = document.getElementById('rating-value');
    const numericRatingDisplay = document.getElementById('numeric-rating');

    // Fungsi untuk menangani klik pada bintang
    stars.forEach(star => {
        star.addEventListener('click', function() {
            // Ambil nilai dari bintang yang diklik
            const ratingValue = this.getAttribute('data-value');
            
            // Tampilkan nilai bintang
            ratingValueDisplay.innerText = `Nilai Bintang: ${ratingValue}`;
            
            // Hitung dan tampilkan nilai angka
            const numericRating = ratingValue * 2;
            numericRatingDisplay.innerText = `Nilai Angka: ${numericRating}`;

            // Atur warna bintang berdasarkan rating yang dipilih
            stars.forEach(star => {
                if (star.getAttribute('data-value') <= ratingValue) {
                    star.style.color = 'gold'; // Bintang yang dipilih dan lebih besar diwarnai emas
                } else {
                    star.style.color = 'grey'; // Bintang yang tidak dipilih tetap abu-abu
                }
            });

            // Di sini Anda bisa mengirim nilai rating ke backend jika diperlukan
        });
    });
