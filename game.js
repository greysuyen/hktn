// Get the elements
const chessText = document.getElementById("chess");
const imageContainer = document.getElementById("image-container");

// Show image on hover
chessText.addEventListener("mouseenter", () => {
    imageContainer.style.display = "block";
});

// Hide image when hover ends
chessText.addEventListener("mouseleave", () => {
    imageContainer.style.display = "none";
});