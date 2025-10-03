// Generic modal function
function setupModal(btnSelector, modalSelector, closeSelector) {
  const btn = document.querySelector(btnSelector);
  const modal = document.querySelector(modalSelector);
  const close = document.querySelector(closeSelector);

  if (btn && modal && close) {
    btn.addEventListener("click", () => {
      modal.classList.add("bg-active");
    });

    close.addEventListener("click", () => {
      modal.classList.remove("bg-active");
    });
  }
}

// Call for each modal
setupModal(".modal-btn", ".modal-bg", ".modal-close");
setupModal(".modal-btn1", ".modal-bg1", ".modal-close1");
setupModal(".modal-btn2", ".modal-bg2", ".modal-close2");
setupModal(".modal-btn3", ".modal-bg3", ".modal-close3");
setupModal(".modal-btn4", ".modal-bg4", ".modal-close4");
setupModal(".modal-btn5", ".modal-bg5", ".modal-close5");
setupModal(".modal-btn6", ".modal-bg6", ".modal-close6");