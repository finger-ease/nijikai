export const modal = () => {
  const modal = document.getElementById('modal');

  modal.addEventListener('click', () => {
    modal.classList.contains('-active') && modal.classList.remove('-active');
  });
};
