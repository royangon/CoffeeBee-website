const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu visibility //
    document.body.classList.toggle("show-mobile-menu");
});
// close menu when the button is clicked //
menuCloseButton.addEventListener("click", () => menuOpenButton.click());