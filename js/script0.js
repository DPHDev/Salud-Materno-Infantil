(() => {
    const refs = {
      openModalBtn: document.querySelector('#data-modal-open'),
      closeModalBtn: document.querySelector('#data-modal-close'),
      modal: document.querySelector('#data-modal'),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
  
const menuHamburger = document.querySelector(".menu_icon");
const navLinks = document.querySelector(".navbar");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu")
}
)
