// typewriter texts in loop
const texts = [
    "DEVELOPER",
    "YOUTUBER",
    "DESIGNER",
];

// typewriter animation speed
let speed = 100;

// selecting the span text from the HTML document
const textElements = document.querySelector(".typewriter-text");

// index to keep track of each word being typed out
let textIndex = 0;

// index to keep track of the character position in each word
let characterIndex = 0;

// typewriter function
function typeWriter() {
    // if we haven't typed the entire word yet...
    if (characterIndex < texts[textIndex].length) {
        // add the next character to the HTML element
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        // increment the character index
        characterIndex++;
        // schedule the next character to be typed after a delay
        setTimeout(typeWriter, speed);
    } else {
        // if we've typed the entire word, schedule erasing it after a delay
        setTimeout(eraseText, 1000);
    }
}

// erases text function
function eraseText() {
    // if there's still text to erase...
    if (textElements.innerHTML.length > 0) {
        // remove the last character from the HTML element
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        // schedule the next character to be erased after a delay
        setTimeout(eraseText, 50);
    } else {
        // if we've erased all the text...
        // move to the next word in the array
        textIndex = (textIndex + 1) % texts.length;
        // reset the character index
        characterIndex = 0;
        // schedule typing the next word after a delay
        setTimeout(typeWriter, 500);
    }
}

// calls the typewriter function when the page loads
window.onload = typeWriter;