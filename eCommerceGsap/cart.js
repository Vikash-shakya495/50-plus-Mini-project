// Cart display script
const cartContainer = document.getElementById('cart-container');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

let payTotal = 0;
if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
} else {
    let totalAmount = [];
    cart.forEach((item, index) => {
        totalAmount.push(parseInt(item.price))
        cartContainer.innerHTML += `
        <div class="cart-item">
            <img src=${item.prodImage} alt="">
            <div>
            <h3>${item.name}</h3>
            <p>${item.prodQual}</p>
            <span>$${item.price}</span>
            </div>
            <button class="remove-button" data-index="${index}">Remove</button>
        </div>`;
    });
    let totalExpense = totalAmount.reduce( (a , b ) =>  a + b , 0);
    payTotal = totalExpense;
    console.log(totalExpense)
    document.querySelector('.total-amount').innerHTML = `Total Amount : $${totalExpense}`;
}

// Remove from cart function
cartContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-button')) {
        const index = event.target.getAttribute('data-index');
        cart.splice(index, 1); // Remove the item from the cart array
        localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
        location.reload(); // Reload the page to refresh the cart display
    }
});

// Checkout button functionality
document.getElementById('checkout-button').addEventListener('click', () => {
    if (cart.length > 0) {
        window.location.href = './payment.html'; // Redirect to payment page
    } else {
        alert("Your cart is empty. Add items before checking out.");
    }
});


const totalAmount = localStorage.getItem('payTotal') || '0.00';
        document.getElementById('total-amount').innerText = totalAmount;
        document.getElementById('pay-amount').innerText = totalAmount;

        function processPayment() {
            // Show loader
            document.getElementById('loader').style.display = 'block';

            // Simulate payment processing delay
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
                document.getElementById('success-message').style.display = 'block';

                // Clear form fields
                document.getElementById('payment-form').reset();

                // Clear cart and total from localStorage
                localStorage.removeItem('cart');
                localStorage.removeItem('payTotal');
            }, 2000);
        }