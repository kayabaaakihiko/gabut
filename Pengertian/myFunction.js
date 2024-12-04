// script.js
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Ganti ikon berdasarkan mode
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Ikon bulan
    } else {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Ikon matahari
    }
});