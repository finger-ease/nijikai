export const toggleButton = () => {
  const toggleButtons = document.querySelectorAll('.toggle-button');

  toggleButtons.forEach((toggleButton, index) => {
    const isSelected = JSON.parse(localStorage.getItem(`isSelected${index}`));

    isSelected && toggleButton.classList.add('-selected');

    toggleButton.addEventListener('click', (e) => {
      const isSelected = JSON.parse(localStorage.getItem(`isSelected${index}`));
      const modal = document.getElementById('modal');

      localStorage.setItem(`isSelected${index}`, !isSelected);
      e.target.classList.toggle('-selected');

      if (!isSelected) {
        modal.children[0].innerText = e.target.innerText;
        modal.classList.add('-active');
      }
    });
  });
};
