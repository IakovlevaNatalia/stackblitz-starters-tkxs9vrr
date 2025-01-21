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
            sessionStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем корзину
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
      sessionStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем пустую корзину
        closeModal('item-added-modal');  // Закрыть текущее модальное окно
        closeModal('cart-modal');  // Закрыть модальное окно корзины (если оно открыто)
      showOrderConfirmation(); 
  } else {
      alert("Your cart is empty! Add items to the cart first.");
  }
}
function showOrderConfirmation() {
  document.getElementById('order-confirmation-modal').style.display = 'flex';
}
function clearCart() {
    if (cart.length > 0) {
        alert("Cart cleared!");
        cart = []; // Очистить массив корзины
        sessionStorage.setItem('cart', JSON.stringify(cart)); // Обновляем хранилище
        viewCart(); // Обновить отображение корзины
    } else {
        alert("No items to clear!"); // Сообщение, если корзина уже пуста
    }
}
function handleFormSubmit(event) {
  event.preventDefault(); // Предотвращает стандартную отправку формы

  // Собираем данные из формы
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const feedback = document.getElementById('feedback').value.trim();

  // Проверяем, чтобы обязательные поля не были пустыми
  if (!name || !email) {
    alert("Name and Email are required fields!");
    return false;
  }

  // Создаем объект с данными
  const customerData = {
    name,
    email,
    phone,
    feedback,
  };

  // Очищаем форму
  document.getElementById('contactForm').reset();

  return false; // Предотвращает дальнейшую обработку формы
}

