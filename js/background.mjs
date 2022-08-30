const totalImages = 5;

const randomIndex = Math.floor(Math.random() * totalImages);
document.body.style.backgroundImage = `url(img/${randomIndex}.jpg)`;
