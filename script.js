let total = 0;

function buyItem(name, price) {
  let cart = document.getElementById("cart");

  let li = document.createElement("li");

  li.textContent = name + " - ₹" + price + " ";

  // Remove button
  let btn = document.createElement("button");
  btn.textContent = "Remove";

  btn.onclick = function () {
    cart.removeChild(li);
    total -= price;
    updateTotal();
  };

  li.appendChild(btn);
  cart.appendChild(li);

  total += price;
  updateTotal();
}

function updateTotal() {
  document.getElementById("total").textContent = total;
}