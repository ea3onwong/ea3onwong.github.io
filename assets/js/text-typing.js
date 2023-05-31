const names = ["Eason"];
let count = 0;
let index = 0;
let currentName = '';
let letter = '';
let isDeleting = false;

(function type() {
    if (count === names.length) {
        count = 0;
    }
    currentName = names[count];
    if (isDeleting) {
        letter = currentName.slice(0, index--);
    } else {
        letter = currentName.slice(0, ++index);
    }

    document.querySelector('#typeEffect').textContent = letter;
    if (!isDeleting && letter.length === currentName.length) {
        // Pause at end
        setTimeout(type, 1000);
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        // Pause before start typing
        setTimeout(type, 500);
    } else {
        let typeSpeed = isDeleting ? 200 : 100;
        setTimeout(type, typeSpeed);
    }
}());
