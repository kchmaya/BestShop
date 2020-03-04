document.addEventListener('DOMContentLoaded', function () {

    const pageNav = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".page-nav-list");

        burger.addEventListener("click", (e) => {
            e.preventDefault();
            nav.classList.toggle("page-nav-active");
        })
    };

    pageNav();
});