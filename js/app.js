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
};

const createBirdListItem = (form) => {
    const birdListItem = document.createElement('li');
    birdListItem.classList.add('bird-list-item');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    birdListItem.appendChild(name);

    const species = document.createElement('h3');
    species.textContent = form.species.value;
    birdListItem.appendChild(species);

    const status = document.createElement('h3');
    status.textContent = form.status.value;
    birdListItem.appendChild(status);

    return birdListItem;
}

const handleDeleteAllClick = (event) => {
    const birdList = document.querySelector('#native-bird');
    birdList.innerHTML = '';
}