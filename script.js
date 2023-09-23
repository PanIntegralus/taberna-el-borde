document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchText');
    const resultsList = document.getElementById('menu');
    const results = resultsList.querySelectorAll('div');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        results.forEach(result => {
            const text = result.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                result.style.display = 'block';
                if (result.classList.contains('category')) {
                    result.style.display = 'flex';
                }
            } else {
                result.style.display = 'none';
            }
        });
    });
    const elementos = document.querySelectorAll('.element');

    elementos.forEach(elemento => {
        elemento.addEventListener('click', () => {
            const parrafo = elemento.querySelector('p');
            if (parrafo.style.fontSize === '20px') {
                parrafo.style.fontSize = '0';
                parrafo.style.opacity = '0';
            } else {
                parrafo.style.fontSize = '20px';
                parrafo.style.opacity = '1';
            }
        })

        elemento.addEventListener('mouseleave', () => {
            const parrafo = elemento.querySelector('p');
            parrafo.style.fontSize = '0';
        });
    });
});
