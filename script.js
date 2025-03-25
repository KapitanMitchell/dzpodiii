let index = 0;
const images = document.querySelectorAll(".image");
const imageContainer = document.getElementById("imageContainer");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        index = Math.min(index + 1, images.length - 1);
    } else if (event.key === "ArrowLeft") {
        index = Math.max(index - 1, 0);
    }
    imageContainer.style.transform = `translateX(${-index * 310}px)`;
});