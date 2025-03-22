function initHeaderScripts() {
    // Sidebar toggle
    const navToggler = document.querySelector('.nav-toggler');
    const hiddenBar = document.querySelector('.hidden-bar');
    const hiddenBarCloser = document.querySelector('.hidden-bar-closer');

    // Search bar toggle
    const searchBtn = document.querySelector('.search-btn');
    const searchBar = document.querySelector('.search-bar');
    const searchCloser = document.querySelector('.search-closer');

    if (navToggler && hiddenBar && hiddenBarCloser) {
        navToggler.addEventListener('click', function (event) {
            event.stopPropagation();
            hiddenBar.classList.add('active');
        });

        hiddenBarCloser.addEventListener('click', function () {
            hiddenBar.classList.remove('active');
        });

        document.addEventListener('click', function (event) {
            if (!hiddenBar.contains(event.target) && !navToggler.contains(event.target)) {
                hiddenBar.classList.remove('active');
            }
        });

        hiddenBar.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    // Search functionality
    if (searchBtn && searchCloser) {
        searchBtn.addEventListener('click', function () {
            searchBar.classList.add('active');
        });

        searchCloser.addEventListener('click', function () {
            searchBar.classList.remove('active');
        });
    }
}

function initSidebarDropdown() {
    const dropdowns = document.querySelectorAll('.side-menu .dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.dropdown-toggle');
        const submenu = dropdown.querySelector('.submenu');

        link.addEventListener('click', function (e) {
            e.preventDefault();

            dropdown.classList.toggle('active');

            if (dropdown.classList.contains('active')) {
                submenu.style.display = "block";
            } else {
                submenu.style.display = "none";
            }
        });
    });
}


