document.addEventListener('DOMContentLoaded', () => {
    const newBirdForm = document.querySelector('#new-bird-form');
    newBirdForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleNewItemFormSubmit = (event) => {
    event.preventDefault()

    const birdListItem = createBirdListItem(event.target);
    const birdList = document.querySelector('#native-bird');
    birdList.appendChild(birdListItem)

    event.target.reset();
} 