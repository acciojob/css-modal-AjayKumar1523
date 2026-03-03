const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-modal");

openBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};