gsap.registerPlugin(ScrollTrigger);

gsap.to(".horizontal-scroll", {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-scroll-wrapper",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "+=3000",
        onEnter: () => {
            document.querySelector('video').style.display = 'none';
            document.querySelector('.navbar').style.display = 'none';
        },
        onLeaveBack: () => {
            document.querySelector('video').style.display = 'block';
            document.querySelector('.navbar').style.display = 'flex';
        }
    }
});

const video = document.querySelector('video');
const videoHeight = video.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    let clipSize = Math.max(videoHeight - scroll, 0);
    video.style.clipPath = `circle(${clipSize}px at 50% 50%)`;


    if (scroll > videoHeight - 500) {
        document.querySelector(".navbar").style.zIndex = "0";
    } else {
        document.querySelector(".navbar").style.zIndex = "-1";
    }
});




const products = document.querySelectorAll('.product');

products.forEach((product) => {
    const addToCartButton = product.querySelector('button:nth-child(1)');
    const purchaseButton = product.querySelector('button:nth-child(2)');
    
    // Add to Cart functionality
    addToCartButton.addEventListener('click', () => {
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('span span').innerText.replace(/[^0-9.-]+/g, ''); 
        const productImg = product.querySelector('img').src;
        const productQual = product.querySelector('p').innerText;
        
        // Create a product object
        const productItem = {
            name: productName,
            price: parseFloat(productPrice),
            prodImage: productImg,
            prodQual: productQual
        };

        // Add product to cart in localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(productItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productName} has been added to your cart!`);
    });

    // Purchase functionality
    purchaseButton.addEventListener('click', () => {
        window.location.href = './payment.html'; // Redirect to payment page
    });
});