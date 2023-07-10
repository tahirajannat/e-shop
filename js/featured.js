// const featuredProduct

const productContainer = [...document.querySelectorAll(".product-container")];
const carousel = document.querySelector(".product-container");
// const carousel = [...document.querySelectorAll(".carousel")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const prevBtn = [...document.querySelectorAll(".pre-btn")];
let isDragStart = false,
    prevPageX,
    prevScrollLeft;
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
    if (!isDragStart) return;
    // e.preventDefault();
    let positionDiff = e.pageX;
    carousel.scrollLeft += positionDiff - prevScrollLeft;
    // carousel.style.transition = "10s";
};
const dragStop = () => {
    isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", (e) => {
    if (!isDragStart) return;
    // e.preventDefault();
    let positionDiff = e.pageX;
    carousel.scrollLeft += positionDiff - prevScrollLeft;
    carousel.style.transition = "all 2s";
    document.getElementById("cat").style.color = "blue";
});
carousel.addEventListener("mousemove", dragStop);

productContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
        console.log("pressed next btn");
    });
    prevBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
        console.log("pressed prev btn");
    });
});
