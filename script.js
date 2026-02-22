const images = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
];

let currentIndex = 0;

function openLightbox(index) 
{
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() 
{
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) 
{
    currentIndex += direction;

    if (currentIndex < 0) 
    {
        currentIndex = images.length - 1;
    }
    if (currentIndex >= images.length) 
    {
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentIndex];
}