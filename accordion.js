const accordionContainers = document.querySelectorAll(".accordionContainer");

accordionContainers.forEach((item) => {
    const icons = item.querySelector(".material-icons");
    const content = item.querySelector(".content");

    icons.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

const accordionBtns = document.getElementsByClassName("accordionBtn");
for (let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener("click", function () {
        window.location.reload();
    });
}
