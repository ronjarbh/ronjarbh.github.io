function loadComponent(url, elementId) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error(`Error loading component ${url}:`, error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    Promise.all([
        loadComponent('header.html', 'header-placeholder'),
        // loadComponent('footer.html', 'footer-placeholder'),
        loadComponent('contact-modal.html', 'contact-placeholder')
    ])
        .then(() => {
            // Remove preloader after all components are loaded
            const preloader = document.querySelector('.preloader');
            if (preloader) {
                delay(100);
                preloader.style.display = 'none';
            }
        });
});

