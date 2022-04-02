let ps5 = document.querySelector(".ps5");
let xbox = document.querySelector(".xbox");

ps5.addEventListener("mouseenter", (e) => {
    ps5.classList.add("move");
});

ps5.addEventListener("mouseleave", (e) => {
    ps5.classList.remove("move");
});

xbox.addEventListener("mouseenter", (e) => {
    xbox.classList.add("move");
});
xbox.addEventListener("mouseleave", (e) => {
    xbox.classList.remove("move");
});
