// Get DOM elements
const dynamicText = document.getElementById('dynamic-text');
const changeTextBtn = document.getElementById('change-text-btn');
const changeStyleBtn = document.getElementById('change-style-btn');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const elementContainer = document.getElementById('element-container');

// Function to change text content
function changeText() {
    dynamicText.textContent = 'Text changed! Click again to reset.';
    if (dynamicText.textContent === 'Text changed! Click again to reset.') {
        changeTextBtn.onclick = resetText;
    }
}

// Function to reset text
function resetText() {
    dynamicText.textContent = 'Welcome! Click the buttons below to interact with this text.';
    changeTextBtn.onclick = changeText;
}

// Function to toggle CSS style
function toggleStyle() {
    dynamicText.classList.toggle('styled');
    if (dynamicText.classList.contains('styled')) {
        dynamicText.style.color = 'blue';
        dynamicText.style.fontWeight = 'bold';
    } else {
        dynamicText.style.color = 'black';
        dynamicText.style.fontWeight = 'normal';
    }
}

// Function to add a new element
function addElement() {
    const newElement = document.createElement('p');
    newElement.textContent = `New element added at ${new Date().toLocaleTimeString()}`;
    newElement.classList.add('dynamic-text');
    elementContainer.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const lastElement = elementContainer.lastElementChild;
    if (lastElement) {
        elementContainer.removeChild(lastElement);
    } else {
        alert('No elements to remove!');
    }
}

// Add event listeners for user interactions
changeTextBtn.addEventListener('click', changeText);
changeStyleBtn.addEventListener('click', toggleStyle);
addElementBtn.addEventListener('click', addElement);
removeElementBtn.addEventListener('click', removeElement);