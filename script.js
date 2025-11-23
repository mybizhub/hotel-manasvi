// Example 50+ menu items
const menuItems = [
  { name: "Veg Fried Rice", price: 150 },
  { name: "Chicken Fried Rice", price: 180 },
  { name: "Egg Fried Rice", price: 160 },
  { name: "Veg Chow Mein", price: 170 },
  { name: "Chicken Chow Mein", price: 200 },
  { name: "Paneer Chilli", price: 220 },
  { name: "Chicken Chilli", price: 250 },
  { name: "Spring Rolls", price: 120 },
  { name: "Manchurian Dry", price: 200 },
  { name: "Manchurian Gravy", price: 210 },
  { name: "Hot & Sour Soup", price: 140 },
  { name: "Sweet Corn Soup", price: 130 },
  { name: "Tom Yum Soup", price: 160 },
  { name: "Veg Hakka Noodles", price: 170 },
  { name: "Chicken Hakka Noodles", price: 200 },
  { name: "Schezwan Fried Rice", price: 190 },
  { name: "Schezwan Noodles", price: 190 },
  { name: "Veg Momos", price: 120 },
  { name: "Chicken Momos", price: 150 },
  { name: "Paneer Momos", price: 140 },
  { name: "Veg Dim Sum", price: 130 },
  { name: "Chicken Dim Sum", price: 160 },
  { name: "Kung Pao Chicken", price: 260 },
  { name: "Mapo Tofu", price: 240 },
  { name: "Crispy Honey Chilli Potato", price: 180 },
  { name: "Veg Manchow Soup", price: 140 },
  { name: "Chicken Manchow Soup", price: 160 },
  { name: "Veg Clear Soup", price: 120 },
  { name: "Chicken Clear Soup", price: 140 },
  { name: "Veg Lollipop", price: 150 },
  { name: "Chicken Lollipop", price: 220 },
  { name: "Veg Crispy", price: 180 },
  { name: "Paneer Crispy", price: 200 },
  { name: "Veg Dragon Roll", price: 190 },
  { name: "Chicken Dragon Roll", price: 220 },
  { name: "Veg Schezwan Momos", price: 150 },
  { name: "Chicken Schezwan Momos", price: 180 },
  { name: "Veg American Chop Suey", price: 200 },
  { name: "Chicken American Chop Suey", price: 230 },
  { name: "Veg Shanghai Noodles", price: 190 },
  { name: "Chicken Shanghai Noodles", price: 220 },
  { name: "Veg Thai Curry", price: 250 },
  { name: "Chicken Thai Curry", price: 280 },
  { name: "Veg Fried Wontons", price: 140 },
  { name: "Chicken Fried Wontons", price: 160 },
  { name: "Veg Satay", price: 180 },
  { name: "Chicken Satay", price: 200 },
  { name: "Veg Crispy Corn", price: 170 },
  { name: "Chicken Crispy Corn", price: 190 },
  { name: "Veg Chilli Garlic Noodles", price: 200 },
  { name: "Chicken Chilli Garlic Noodles", price: 230 }
];

let cart = {};

function renderMenu() {
  const menu = document.getElementById('menu');
  menu.innerHTML = '';
  menuItems.forEach((item, index) => {
    menu.innerHTML += `
      <div class="menu-item">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <div class="controls">
          <button onclick="decreaseQty(${index})">-</button>
          <span id="qty-${index}">0</span>
          <button onclick="increaseQty(${index})">+</button>
        </div>
      </div>
    `;
  });
}

function increaseQty(index) {
  const item = menuItems[index];
  if (!cart[item.name]) {
    cart[item.name] = { ...item, qty: 0 };
  }
  cart[item.name].qty++;
  document.getElementById(`qty-${index}`).innerText = cart[item.name].qty;
  renderCart();
}

function decreaseQty(index) {
  const item = menuItems[index];
  if (cart[item.name] && cart[item.name].qty > 0) {
    cart[item.name].qty--;
    document.getElementById(`qty-${index}`).innerText = cart[item.name].qty;
    if (cart[item.name].qty === 0) delete cart[item.name];
    renderCart();
  }
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;
  Object.values(cart).forEach(c => {
    total += c.price * c.qty;
    cartItems.innerHTML += `<li>${c.name} (x${c.qty}) - ₹${c.price * c.qty}</li>`;
  });
  document.getElementById('cart-total').innerText = total;
}

// Initialize
renderMenu();
