let cart = [];

function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const totalCost = document.getElementById('total-cost');
  
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    cartItems.innerHTML += `
      <li>
        ${item.name} - $${item.price} x ${item.quantity}
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </li>
    `;
  });

  cartCount.innerText = cart.length;
  totalCost.innerText = `Total: $${total}`;
}

function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCart();
  }
}

function toggleCart() {
  const cartSection = document.getElementById('cart');
  cartSection.classList.toggle('hidden');
}

function checkout() {
  if (cart.length > 0) {
    alert(`Total: $${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}. Thank you for shopping!`);
    cart = [];
    updateCart();
  } else {
    alert('Your cart is empty!');
  }
}
