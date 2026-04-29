let total = 0;

function addToCart(name, price) {
  let cart = document.getElementById("cart");

  let li = document.createElement("li");
  li.innerHTML = name + " - ₹" + price + " ";

  let btn = document.createElement("button");
  btn.innerText = "Remove";

  btn.onclick = function () {
    li.remove();
    total -= price;
    updateTotal();
  };

  li.appendChild(btn);
  cart.appendChild(li);

  total += price;
  updateTotal();
}

function updateTotal() {
  document.getElementById("total").innerText = total;
}