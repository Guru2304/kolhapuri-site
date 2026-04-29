function buyItem(name) {
  let cart = document.getElementById("cart");

  let item = document.createElement("li");
  item.textContent = name;

  cart.appendChild(item);
}