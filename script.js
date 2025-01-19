/*JavaScript to show alert message*/
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  alert('Thank you for subscribing.');
});

let cart = [];

        function addToCart(item) {
            cart.push(item);
            const message = `${item} has been added to your cart!`;
            document.getElementById('item-added-message').textContent = message;
            document.getElementById('item-added-modal').style.display = 'flex';
        }

        function viewCart() {
            const cartList = document.getElementById('cart-list');
            cartList.innerHTML = cart.length > 0 
                ? `<ul>${cart.map(item => `<li>${item}</li>`).join('')}</ul>`
                : '<p>Your cart is empty.</p>';

            document.getElementById('cart-modal').style.display = 'flex';
        }
        // Функция для оформления заказа
function placeOrder() {
  if (cart.length > 0) {
      alert("Your order has been placed!");
      clearCart();  // Очистить корзину после оформления заказа
      closeModal('cart-modal');  // Закрыть модальное окно
      showOrderConfirmation(); 
  } else {
      alert("Your cart is empty! Add items to the cart first.");
  }
}
function showOrderConfirmation() {
  document.getElementById('order-confirmation-modal').style.display = 'flex';
}
        function clearCart() {
            cart = [];
            viewCart();
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }
