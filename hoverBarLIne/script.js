const bars = document.querySelectorAll('.bar');
const showcase = document.querySelector('.showcase');

const images = [
    'https://imgs.search.brave.com/1K8GA3h58qAR-pjBQEYlsFsgeBUdxLWWh12l59ayFB4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHViZnMvaHRtbC10/ZXh0LWJveC53ZWJw',
    'https://imgs.search.brave.com/eeavOmvuXA6Q9u_tTdeSGYSHp9y54-5G6cfXKI_UXlQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vY2xvdWRpbmFy/eS1tYXJrZXRpbmcv/aW1hZ2VzL3dfMTU0/MCxoXzg0Ny9mX2F1/dG8scV9hdXRvL3Yx/NjQ5NzE4NTk0L1dl/Yl9Bc3NldHMvYmxv/Zy93b3JraW5nX3dp/dGhfY3NzXzIyMjE4/NzIwYWIvd29ya2lu/Z193aXRoX2Nzc18y/MjIxODcyMGFiLWpw/Zz9faT1BQQ.jpeg',
    'https://imgs.search.brave.com/Xq8vWySoG6wvDN2FKTlcuDDxEetR2wa7zHQKSt1CWv0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qYXZhc2NyaXB0/LXByb2dyYW1taW5n/LWNvZGUtYWJzdHJh/Y3QtdGVjaG5vbG9n/eS1iYWNrZ3JvdW5k/XzI3MjMwNi0xNTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc'
];

bars.forEach((bar, index) => {
    bar.addEventListener('mouseenter', () => {
        showcase.style.transition = 'background-image 0.5s ease-in-out';  // Smooth transition for both mouse enter and leave
        showcase.style.backgroundImage = `url(${images[index]})`;  // Fix template literal syntax
        showcase.style.backgroundPosition = 'center';
        showcase.style.backgroundSize = 'cover';
        showcase.classList.add('active');
    });

    bar.addEventListener('mouseleave', () => {
            showcase.style.transition = 'background-image 2s ease-in';  // Transition when clearing the image
            showcase.style.backgroundImage = '';  // Clear the image on mouse leave
            showcase.classList.remove('active');

    });
});
