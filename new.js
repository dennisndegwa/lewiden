    document.addEventListener('DOMContentLoaded', () => {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        let total = 0;

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const product = button.parentElement.dataset.product;
                const price = parseFloat(button.parentElement.dataset.price);

                const cartItem = document.createElement('li');
                cartItem.textContent = `${product} - $${price.toFixed(2)}`;
                cartItems.appendChild(cartItem);

                total += price;
                cartTotal.textContent = total.toFixed(2);
            });
        });

        document.querySelectorAll('.like-button').forEach(button => {
            button.addEventListener('click', () => {
                const likeCount = button.querySelector('.like-count');
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
            });
        });
    });