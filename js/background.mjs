const totalImages = 4;

const randomIndex = Math.floor(Math.random() * totalImages);
document.body.style.backgroundImage = `url(img/${randomIndex}.jpg)`;
