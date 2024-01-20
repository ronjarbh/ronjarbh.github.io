var debounce = function(fn, t = 1000) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    }
};

function playAudio() {
    document.getElementById('novideo').play();
}

function nextPage() {
    document.getElementById('ans').style.display = 'block';
    document.getElementById('ask').style.display = 'none';
    document.getElementById('novideo').pause();
    document.getElementById('ansvideo').play();
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    var noButton = document.getElementById('noButton');
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    playAudio();
}
