const numberOfStars = 100;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = random(2, 4);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${random(0, 100)}vw`;
    star.style.top = `${random(0, 100)}vh`;

    star.style.animationDelay = `${random(0, 5)}s`;

    document.body.appendChild(star);
}