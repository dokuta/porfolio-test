// shows dropdown menu
function hamburg() {
    // selects the element with the 'dropdown' class and removes the transform that hides it
    document.querySelector('.dropdown').style.transform = 'translateY(0)';
}

// hides dropdown menu
function cancel() {
    // selects the element with the 'dropdown' class and applies the transformation to hide it
    document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
}

// closes the dropdown when a link is clicked
function closeDropdown() {
    // selects the element with the 'dropdown' class and applies the transformation to hide it
    document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
}

// selects all links within the element with the 'dropdown' class
const links = document.querySelectorAll('.dropdown a');

// adds an event listener to each link
links.forEach(link => {
    link.addEventListener('click', closeDropdown);
});