function toggleNav() {
    const burger = document.querySelector('#burger'),
        hiddenNav = document.querySelectorAll('.hidden-nav'),
        sidebar = document.querySelector('aside'),
        links = document.querySelectorAll('.nav-link'),
        content = document.querySelector('.content'),
        desktopSearch = document.querySelector('#desktop-search'),
        mobileSearch = document.querySelector('#mobile-search'),
        openSearchBtn = document.querySelector('#open-search'),
        closeSearchBtn = document.querySelector('#close-search'),
        accountProfile = document.querySelector('#header-account-profile');

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        hiddenNav.forEach(navItem => navItem.classList.toggle('hidden'));
        links.forEach(link => link.classList.toggle('active'));
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
    });

    openSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        accountProfile.classList.toggle('hidden');
        mobileSearch.classList.toggle('hidden');
        mobileSearch.classList.add('flex');
    });

    closeSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        accountProfile.classList.toggle('hidden');
        mobileSearch.classList.toggle('hidden');
        mobileSearch.classList.remove('flex');
    });
}

toggleNav();