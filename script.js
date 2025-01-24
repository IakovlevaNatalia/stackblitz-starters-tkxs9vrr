/*alert message*/
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  alert('Thank you for subscribing.');
});

let cart = [];
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
      if (modal) {
          modal.style.display = 'none'; 
      } else {
          console.log('Modal not found:', modalId); 
      }
  }
  function addToCart(item) {
    cart.push(item);
    const message = `${item} has been added to your cart!`;
    document.getElementById('item-added-message').textContent = message;
    document.getElementById('item-added-modal').style.display = 'flex';
    sessionStorage.setItem('cart', JSON.stringify(cart)); 
  }

  function viewCart() {
      const cartList = document.getElementById('cart-list');
      cartList.innerHTML = cart.length > 0 
      ? `<ul>${cart.map(item => `<li>${item}</li>`).join('')}</ul>`
      : '<p>Your cart is empty.</p>';

      document.getElementById('cart-modal').style.display = 'flex';
    }
  
  function placeOrder() {
    if (cart.length > 0) {
        alert("Your order has been placed!");
        clearCart(); 
        sessionStorage.setItem('cart', JSON.stringify(cart)); 
        closeModal('item-added-modal');  
        closeModal('cart-modal'); 
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
        cart = []; 
        sessionStorage.setItem('cart', JSON.stringify(cart)); 
        viewCart(); 
    } else {
      alert("No items to clear!"); 
    }
}

  // Form submit handler
  function handleFormSubmit(event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  const missingFields = [];
  if (!name) missingFields.push("Name");
  if (!email) missingFields.push("Email");
  if (!phone) missingFields.push("Phone");
  if (!feedback) missingFields.push("Message");

  if (missingFields.length > 0) {
    alert(`Please enter your ${missingFields.join(", ")}.`);
    return false;
  }

  const customerData = { name, email, phone, feedback };
  localStorage.setItem("customerData", JSON.stringify(customerData));

  document.getElementById("contactForm").reset();
  document.getElementById("thankYouModal").style.display = "block";

  return false;
  
  // Close modal handler
  function closeModal() {
    const modal = document.getElementById('thankYouModal');
    if (modal) {
      modal.style.display = 'none'; 
    }
  }
}