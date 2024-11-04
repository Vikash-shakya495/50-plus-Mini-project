let currentImageIndex = 0;
const images = [
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rbGwsPuAZ8ckUS1MQqi3p1rwARsLPWRWlg&s', caption: 'Python' },
  { src: 'https://apprand.com/wp-naughtycontent/uploads/2015/08/93295-Java-Logo-1920x1080-Wallpaper-1024x576.jpg', caption: 'Java' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3MiLmb39iO83lt2L92MHiN32ixKXcPQzlAA&s', caption: 'Javascript' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFAjjyBlWXvNJpl3pjwVujrK7oCq51Inbs5g&s', caption: 'php' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt-TGjHVh4qzymsShj8a9dkNKBG7rfq2wTg&s', caption: 'ReactNative' },
];

function openLightbox(index) {
  currentImageIndex = index;
  document.getElementById('lightboxImage').src = images[index].src;
  document.getElementById('caption').innerText = images[index].caption;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  document.getElementById('lightboxImage').src = images[currentImageIndex].src;
  document.getElementById('caption').innerText = images[currentImageIndex].caption;
}
