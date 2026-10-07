// =========================================
// PORTFOLIO MODALS
// =========================================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeModalBg(event, id) {
  // close only when clicking the dark background, not the card itself
  if (event.target.id === id) {
    closeModal(id);
  }
}

// =========================================
// INIT
// =========================================
document.addEventListener('DOMContentLoaded', () => {
  // Close modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-bg.open').forEach((m) => closeModal(m.id));
    }
  });
});
