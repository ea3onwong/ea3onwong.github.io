document.addEventListener("DOMContentLoaded", function () {
    var zoomInElement = document.querySelector(".zoom-in");
    var titleElement = document.querySelector(".contact-title");

    titleElement.addEventListener("mouseover", function () {
        zoomInElement.style.transform = "scale(1.5)";
    });

    titleElement.addEventListener("mouseout", function () {
        zoomInElement.style.transform = "scale(1)";
    });
});
