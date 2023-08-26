const itemButtons = document.querySelectorAll('.item-btn');
const showButton = document.getElementById('show-btn');
const selectedItemsTextarea = document.getElementById('selected-items');

let selectedItems = [];

itemButtons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
      selectedItems.push(value);
      button.classList.add('selected');
    }
  )
});


showButton.addEventListener('click', () => {
  selectedItemsTextarea.value = selectedItems.join(', ');
});

  