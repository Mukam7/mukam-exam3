// <><><><><><><><Navbar-responsive <><<<><>><<><><

function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);


// <><><><><><><><> Modal <><><><><><><><<>
const open_btn = document.querySelector(".open-modal");
const close_btn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modal_content = document.querySelector(".modal-content");

function modalShow() {
  modal.classList.add("modal-show");
  modal_content.classList.add("modal-content-show");
}

function modalHide() {
  modal.classList.remove("modal-show");
  modal_content.classList.remove("modal-content-show");
}

open_btn.addEventListener("click", modalShow);

close_btn.addEventListener("click", modalHide);

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modalHide();
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modalHide();
  }
});

// <<><><><><<><><><><> corousel <><<><><><<<><><><>
