const image = document.getElementById('image');
function changeImage () {
    const random = Math.random();
    image.setAttribute('src', `https://picsum.photos/200/300?random=${random}`);
}