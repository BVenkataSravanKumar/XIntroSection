
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
const dropdownLists = document.querySelectorAll(".dropdown-list");

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
        const isOpen = dropdown.classList.contains("show");

        dropdownLists.forEach((list) => {
            list.classList.remove("show");
        });

        dropdownToggles.forEach((button) => {
            button.setAttribute("aria-expanded", "false");

            const arrow = button.querySelector("img");
            arrow.src = "./assets/images/icon-arrow-down.svg";
        });

        if (!isOpen) {
            dropdown.classList.add("show");
            toggle.setAttribute("aria-expanded", "true");

            const arrow = toggle.querySelector("img");
            arrow.src = "./assets/images/icon-arrow-up.svg";
        }
    });
});

document.addEventListener("click", (event) => {
    const clickedDropdown = event.target.closest(".nav-link");

    if (!clickedDropdown) {
        dropdownLists.forEach((list) => {
            list.classList.remove("show");
        });

        dropdownToggles.forEach((button) => {
            button.setAttribute("aria-expanded", "false");

            const arrow = button.querySelector("img");
            arrow.src = "./assets/images/icon-arrow-down.svg";
        });
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        dropdownLists.forEach((list) => {
            list.classList.remove("show");
        });

        dropdownToggles.forEach((button) => {
            button.setAttribute("aria-expanded", "false");

            const arrow = button.querySelector("img");
            arrow.src = "./assets/images/icon-arrow-down.svg";
        });

        if (navigation.classList.contains("active")) {
            closeMobileMenu();
        }
    }
});
