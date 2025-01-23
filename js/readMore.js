// JavaScript for toggling the "Read More" content
const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.querySelector(".more-text");

readMoreBtn.addEventListener("click", () => {
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
});