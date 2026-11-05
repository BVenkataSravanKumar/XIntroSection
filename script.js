const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
const dropdownLists = document.querySelectorAll(".dropdown-list");
const navLinks = document.querySelectorAll(".nav-link");

function openMobileMenu() {
    navigation.classList.add("active");
    overlay.classList.add("active");
    closeMenu.focus();
}

function closeMobileMenu() {
    navigation.classList.remove("active");
    overlay.classList.remove("active");
    openMenu.focus();
}

openMenu.addEventListener("click", openMobileMenu);
closeMenu.addEventListener("click", closeMobileMenu);
overlay.addEventListener("click", closeMobileMenu);

dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const dropdown = toggle.nextElementSibling;
        const navLink = toggle.closest(".nav-link");
        const isOpen = navLink.classList.contains("link-open");

        dropdownLists.forEach((list) => {
            list.classList.remove("show");
        });

        navLinks.forEach((link) => {
            link.classList.remove("link-open");
        });

        dropdownToggles.forEach((button) => {
            button.setAttribute("aria-expanded", "false");
            button.querySelector("img").src = "./assets/images/icon-arrow-down.svg";
        });

        if (!isOpen) {
            dropdown.classList.add("show");
            navLink.classList.add("link-open");
            toggle.setAttribute("aria-expanded", "true");
            toggle.querySelector("img").src = "./assets/images/icon-arrow-up.svg";
        }
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-link")) {
        dropdownLists.forEach((list) => {
            list.classList.remove("show");
        });

        navLinks.forEach((link) => {
            link.classList.remove("link-open");
        });

        dropdownToggles.forEach((button) => {
            button.setAttribute("aria-expanded", "false");
            button.querySelector("img").src = "./assets/images/icon-arrow-down.svg";
        });
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        dropdownLists.forEach((list) => {
            list.classList.remove("show");
        });

        navLinks.forEach((link) => {
            link.classList.remove("link-open");
        });

        dropdownToggles.forEach((button) => {
            button.setAttribute("aria-expanded", "false");
            button.querySelector("img").src = "./assets/images/icon-arrow-down.svg";
        });

        if (navigation.classList.contains("active")) {
            closeMobileMenu();
        }
    }
});