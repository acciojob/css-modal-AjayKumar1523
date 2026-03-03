const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

openBtn.onclick = function () {
    modal.style.display = "block";   // MUST BE block
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};