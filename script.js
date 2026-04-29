let total = 0;
let currentProduct = null;

function addToCart(name, price) {
  let cart = document.getElementById("cart");

  let li = document.createElement("li");
  li.innerText = name + " - ₹" + price;

  cart.appendChild(li);

  total += price;
  document.getElementById("total").innerText = total;
}

/* SEARCH */
function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}

/* FILTER */
function filter(type) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (type === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(type) ? "block" : "none";
    }
  });
}

/* PRODUCT DETAIL */
function openProduct(name, price) {
  currentProduct = { name, price };

  document.getElementById("pname").innerText = name;
  document.getElementById("pprice").innerText = "₹" + price;

  document.getElementById("productBox").classList.remove("hidden");
}

function closeProduct() {
  document.getElementById("productBox").classList.add("hidden");
}

function addToCartFromModal() {
  addToCart(currentProduct.name, currentProduct.price);
  closeProduct();
}

/* LOGIN */
function showLogin() {
  document.getElementById("loginBox").classList.remove("hidden");
}

function closeLogin() {
  document.getElementById("loginBox").classList.add("hidden");
}

/* CART */
function showCart() {
  document.getElementById("cartBox").classList.toggle("hidden");
}

/* CHECKOUT */
function checkout() {
  document.getElementById("checkoutBox").classList.remove("hidden");
}

function closeCheckout() {
  document.getElementById("checkoutBox").classList.add("hidden");
}