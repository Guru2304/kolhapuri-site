const products = [
  {
    id: "pk-101",
    name: "Rajwadi Noor",
    category: "Wedding Luxe",
    price: 4299,
    rating: 4.9,
    colors: ["Gold", "Ivory"],
    features: ["bridal", "festive"],
    shortDescription: "Mirror-work straps with soft metallic leather for wedding edits.",
    longDescription: "A statement bridal Kolhapuri with mirror detailing, premium leather lining, and a cushioned footbed designed for long celebration wear.",
    craftsmanship: ["Hand-applied mirrorwork", "Soft leather underside", "Cushioned heel support"],
    gradient: "linear-gradient(135deg, #d3a156 0%, #7f2507 100%)",
    bestseller: true
  },
  {
    id: "pk-102",
    name: "Saanjh Tan Classic",
    category: "Classic Heritage",
    price: 2199,
    rating: 4.7,
    colors: ["Tan", "Chestnut"],
    features: ["handwoven"],
    shortDescription: "Traditional tan Kolhapuri with braided upper and classic finish.",
    longDescription: "Built around the timeless Kolhapuri silhouette, this pair features braided detailing, sturdy leather construction, and a wearable all-day profile.",
    craftsmanship: ["Braided handwoven upper", "Vegetable-tanned leather", "Traditional toe ring cut"],
    gradient: "linear-gradient(135deg, #b77b58 0%, #744931 100%)",
    bestseller: true
  },
  {
    id: "pk-103",
    name: "Mehfil Ruby",
    category: "Festive Edit",
    price: 3199,
    rating: 4.8,
    colors: ["Ruby", "Copper"],
    features: ["festive", "bridal"],
    shortDescription: "Festive red pair with foil edges and jewel-toned finish.",
    longDescription: "Made for celebration dressing, Mehfil Ruby balances festive color with a flexible sole and polished handcrafted finish.",
    craftsmanship: ["Foil edge detailing", "Flexible leather sole", "Fine topstitch finish"],
    gradient: "linear-gradient(135deg, #9f2d2d 0%, #411415 100%)",
    bestseller: false
  },
  {
    id: "pk-104",
    name: "City Walk Slate",
    category: "Contemporary Edge",
    price: 2899,
    rating: 4.6,
    colors: ["Slate", "Black"],
    features: ["comfort"],
    shortDescription: "Minimal black Kolhapuri for denim, co-ords, and city dressing.",
    longDescription: "A modern, clean-lined Kolhapuri with a softer insole and understated matte finish, built for repeat wear through the week.",
    craftsmanship: ["Soft padded footbed", "Minimal matte upper", "Urban slim profile"],
    gradient: "linear-gradient(135deg, #57585d 0%, #1e2023 100%)",
    bestseller: true
  },
  {
    id: "pk-105",
    name: "Aaram Softstep",
    category: "Comfort Everyday",
    price: 2499,
    rating: 4.9,
    colors: ["Honey", "Mocha"],
    features: ["comfort"],
    shortDescription: "Cloud-soft padded Kolhapuri for all-day use.",
    longDescription: "Designed to be your daily favorite, this pair features foam cushioning under a handcrafted upper for lasting comfort without losing authenticity.",
    craftsmanship: ["Memory-soft insole", "Wide comfort strap", "Lightweight sole base"],
    gradient: "linear-gradient(135deg, #c89458 0%, #7b5633 100%)",
    bestseller: true
  },
  {
    id: "pk-106",
    name: "Sheesh Mahal",
    category: "Wedding Luxe",
    price: 4599,
    rating: 5.0,
    colors: ["Champagne", "Rose Gold"],
    features: ["bridal", "festive"],
    shortDescription: "Opulent wedding pair with layered straps and luxe finish.",
    longDescription: "This premium wedding Kolhapuri features layered cutwork, reflective accents, and a carefully lined footbed to keep the look grand and wearable.",
    craftsmanship: ["Cutwork leather upper", "Hand-finished edges", "Premium bridal cushioning"],
    gradient: "linear-gradient(135deg, #e4c49a 0%, #b24a24 100%)",
    bestseller: false
  },
  {
    id: "pk-107",
    name: "Kesari Weave",
    category: "Classic Heritage",
    price: 2399,
    rating: 4.7,
    colors: ["Kesari", "Rust"],
    features: ["handwoven", "festive"],
    shortDescription: "Warm-toned woven straps with heritage appeal and rich finish.",
    longDescription: "A classic heritage pair updated with a slightly softer sole, keeping the artisanal woven upper front and center.",
    craftsmanship: ["Multi-strap braid", "Hand-burnished finish", "Flexible traditional sole"],
    gradient: "linear-gradient(135deg, #d5802e 0%, #6e3114 100%)",
    bestseller: false
  },
  {
    id: "pk-108",
    name: "Noor Nights",
    category: "Festive Edit",
    price: 2999,
    rating: 4.5,
    colors: ["Midnight", "Bronze"],
    features: ["festive"],
    shortDescription: "Dark festive pair with metallic highlights and sleek silhouette.",
    longDescription: "Ideal for evening occasions, Noor Nights combines deep tones and metallic accents for a dramatic but wearable festive statement.",
    craftsmanship: ["Metallic brushed upper", "Soft lining", "Evening-ready silhouette"],
    gradient: "linear-gradient(135deg, #23324a 0%, #6e4a2e 100%)",
    bestseller: false
  },
  {
    id: "pk-109",
    name: "Boardroom Kolha",
    category: "Men's Signature",
    price: 3299,
    rating: 4.8,
    colors: ["Espresso", "Black"],
    features: ["comfort", "handwoven"],
    shortDescription: "Men's polished leather Kolhapuri with elevated grip and structure.",
    longDescription: "A sharper men's Kolhapuri built for smarter dressing, with comfort padding and a richer leather finish for office-to-evening wear.",
    craftsmanship: ["Structured leather upper", "Grip-focused outsole", "Comfort instep lining"],
    gradient: "linear-gradient(135deg, #5b3a2a 0%, #21140f 100%)",
    bestseller: true
  },
  {
    id: "pk-110",
    name: "Weekend Palm",
    category: "Comfort Everyday",
    price: 1899,
    rating: 4.4,
    colors: ["Palm", "Sand"],
    features: ["comfort"],
    shortDescription: "Light everyday slip-on for errands, travel, and summer wear.",
    longDescription: "Simple, airy, and reliable, Weekend Palm is an easy-wear Kolhapuri designed for relaxed daily rotation.",
    craftsmanship: ["Feather-light build", "Relaxed open upper", "Softened base layer"],
    gradient: "linear-gradient(135deg, #b5a271 0%, #6d6241 100%)",
    bestseller: false
  },
  {
    id: "pk-111",
    name: "Ivory Jharokha",
    category: "Wedding Luxe",
    price: 4399,
    rating: 4.9,
    colors: ["Ivory", "Pearl"],
    features: ["bridal"],
    shortDescription: "Minimal ivory bridal pair with tonal embroidery and soft edge finish.",
    longDescription: "A refined bridal Kolhapuri for intimate ceremonies and modern trousseau styling, balancing delicacy with cushioning.",
    craftsmanship: ["Tonal embroidered strap", "Soft inner leather", "Refined bridal silhouette"],
    gradient: "linear-gradient(135deg, #efdfcd 0%, #ba916f 100%)",
    bestseller: false
  },
  {
    id: "pk-112",
    name: "Graphite Loop",
    category: "Contemporary Edge",
    price: 3099,
    rating: 4.6,
    colors: ["Graphite", "Stone"],
    features: ["comfort"],
    shortDescription: "Monochrome double-strap Kolhapuri with fashion-forward edge.",
    longDescription: "A clean, directional silhouette for styling with trousers, shirts, or elevated casual fits.",
    craftsmanship: ["Dual-strap construction", "Cushioned footbed", "Contemporary color blocking"],
    gradient: "linear-gradient(135deg, #899098 0%, #35383d 100%)",
    bestseller: false
  }
];

const state = {
  selectedCategory: "All",
  search: "",
  sort: "featured",
  maxPrice: 5000,
  selectedFeatures: [],
  cart: JSON.parse(localStorage.getItem("pk-cart") || "[]")
};

const categoryChips = document.getElementById("category-chips");
const productGrid = document.getElementById("product-grid");
const resultsSummary = document.getElementById("results-summary");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const priceRange = document.getElementById("price-range");
const priceRangeValue = document.getElementById("price-range-value");
const clearFiltersButton = document.getElementById("clear-filters");
const featureFilters = [...document.querySelectorAll(".feature-filter")];
const bestsellerStrip = document.getElementById("bestseller-strip");
const productTemplate = document.getElementById("product-card-template");
const cartButton = document.getElementById("cart-button");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const closeCartButton = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout-button");
const productModal = document.getElementById("product-modal");
const modalContent = document.getElementById("modal-content");
const interestForm = document.getElementById("interest-form");
const formMessage = document.getElementById("form-message");

function formatPrice(price) {
  return `Rs. ${price.toLocaleString("en-IN")}`;
}

function getCategories() {
  return ["All", ...new Set(products.map((product) => product.category))];
}

function makeMonogram(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function renderCategories() {
  categoryChips.innerHTML = "";

  getCategories().forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${state.selectedCategory === category ? " active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      state.selectedCategory = category;
      renderCategories();
      renderProducts();
    });
    categoryChips.appendChild(button);
  });
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();

  const filtered = products.filter((product) => {
    const matchesCategory = state.selectedCategory === "All" || product.category === state.selectedCategory;
    const matchesPrice = product.price <= state.maxPrice;
    const matchesSearch =
      !query ||
      `${product.name} ${product.category} ${product.colors.join(" ")} ${product.shortDescription}`
        .toLowerCase()
        .includes(query);
    const matchesFeatures =
      state.selectedFeatures.length === 0 ||
      state.selectedFeatures.every((feature) => product.features.includes(feature));

    return matchesCategory && matchesPrice && matchesSearch && matchesFeatures;
  });

  const sorted = [...filtered];
  switch (state.sort) {
    case "low-high":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "high-low":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    default:
      sorted.sort((a, b) => Number(b.bestseller) - Number(a.bestseller) || b.rating - a.rating);
  }

  return sorted;
}

function openModal(product) {
  modalContent.innerHTML = `
    <div class="modal-card">
      <div class="modal-visual" style="--modal-gradient:${product.gradient}"></div>
      <div class="modal-copy">
        <div class="modal-meta">
          <span class="product-category">${product.category}</span>
          <button class="icon-button" id="close-modal" aria-label="Close details">X</button>
        </div>
        <h3>${product.name}</h3>
        <div class="modal-meta">
          <strong>${formatPrice(product.price)}</strong>
          <span class="product-rating">${product.rating} / 5</span>
        </div>
        <p>${product.longDescription}</p>
        <ul class="modal-points">
          ${product.craftsmanship.map((point) => `<li>${point}</li>`).join("")}
        </ul>
        <p>Available colors: ${product.colors.join(", ")}</p>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="modal-close-cta">Continue Browsing</button>
          <button type="button" class="btn btn-primary" id="modal-add-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  `;

  productModal.showModal();
  document.getElementById("close-modal").addEventListener("click", closeModal);
  document.getElementById("modal-close-cta").addEventListener("click", closeModal);
  document.getElementById("modal-add-cart").addEventListener("click", () => {
    addToCart(product.id);
    closeModal();
    openCart();
  });
}

function closeModal() {
  productModal.close();
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  productGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        No products matched your current filters. Try broadening price, search, or highlight filters.
      </div>
    `;
    resultsSummary.textContent = "0 products found";
    return;
  }

  resultsSummary.textContent = `${filteredProducts.length} styles available`;

  filteredProducts.forEach((product) => {
    const fragment = productTemplate.content.cloneNode(true);
    const article = fragment.querySelector(".product-card");
    const visual = fragment.querySelector(".card-visual");
    const category = fragment.querySelector(".product-category");
    const rating = fragment.querySelector(".product-rating");
    const name = fragment.querySelector(".product-name");
    const description = fragment.querySelector(".product-description");
    const tags = fragment.querySelector(".product-tags");
    const price = fragment.querySelector(".product-price");
    const colors = fragment.querySelector(".product-colors");
    const addButton = fragment.querySelector(".add-to-cart");

    visual.style.setProperty("--card-gradient", product.gradient);
    visual.dataset.monogram = makeMonogram(product.name);
    visual.setAttribute("aria-label", `Open details for ${product.name}`);
    visual.addEventListener("click", () => openModal(product));

    article.addEventListener("dblclick", () => openModal(product));
    category.textContent = product.category;
    rating.textContent = `${product.rating} / 5`;
    name.textContent = product.name;
    description.textContent = product.shortDescription;
    price.textContent = formatPrice(product.price);
    colors.textContent = product.colors.join(" / ");

    product.features.forEach((feature) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = feature;
      tags.appendChild(tag);
    });

    addButton.addEventListener("click", () => addToCart(product.id));
    productGrid.appendChild(fragment);
  });
}

function renderBestsellers() {
  bestsellerStrip.innerHTML = "";

  products
    .filter((product) => product.bestseller)
    .slice(0, 4)
    .forEach((product) => {
      const tile = document.createElement("article");
      tile.className = "bestseller-tile";
      tile.style.setProperty("--tile-gradient", product.gradient);
      tile.innerHTML = `
        <span>${product.category}</span>
        <strong>${product.name}</strong>
        <p>${product.shortDescription}</p>
        <button class="btn btn-secondary" type="button">View Pair</button>
      `;

      tile.querySelector("button").addEventListener("click", () => openModal(product));
      bestsellerStrip.appendChild(tile);
    });
}

function saveCart() {
  localStorage.setItem("pk-cart", JSON.stringify(state.cart));
}

function addToCart(productId) {
  const existing = state.cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ productId, quantity: 1 });
  }

  saveCart();
  renderCart();
}

function updateQuantity(productId, delta) {
  const item = state.cart.find((entry) => entry.productId === productId);
  if (!item) {
    return;
  }

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.productId !== productId);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((entry) => entry.productId !== productId);
  saveCart();
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";

  if (state.cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-state">Your cart is empty. Add a pair to start building your collection.</div>';
  }

  let totalItems = 0;
  let totalPrice = 0;

  state.cart.forEach((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    if (!product) {
      return;
    }

    totalItems += item.quantity;
    totalPrice += product.price * item.quantity;

    const wrapper = document.createElement("article");
    wrapper.className = "cart-item";
    wrapper.innerHTML = `
      <div class="cart-thumb" style="background:${product.gradient}"></div>
      <div>
        <div class="cart-line">
          <h4>${product.name}</h4>
          <strong>${formatPrice(product.price * item.quantity)}</strong>
        </div>
        <p>${product.category}</p>
        <div class="cart-actions">
          <button type="button" class="qty-button" aria-label="Decrease quantity">-</button>
          <span>${item.quantity}</span>
          <button type="button" class="qty-button" aria-label="Increase quantity">+</button>
          <button type="button" class="remove-button">Remove</button>
        </div>
      </div>
    `;

    const [decreaseButton, increaseButton] = wrapper.querySelectorAll(".qty-button");
    const removeButton = wrapper.querySelector(".remove-button");

    decreaseButton.addEventListener("click", () => updateQuantity(product.id, -1));
    increaseButton.addEventListener("click", () => updateQuantity(product.id, 1));
    removeButton.addEventListener("click", () => removeFromCart(product.id));
    cartItems.appendChild(wrapper);
  });

  cartCount.textContent = String(totalItems);
  cartTotal.textContent = formatPrice(totalPrice);
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartOverlay.hidden = false;
  document.body.classList.add("cart-open");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartOverlay.hidden = true;
  document.body.classList.remove("cart-open");
}

function clearFilters() {
  state.selectedCategory = "All";
  state.search = "";
  state.sort = "featured";
  state.maxPrice = 5000;
  state.selectedFeatures = [];

  searchInput.value = "";
  sortSelect.value = "featured";
  priceRange.value = "5000";
  priceRangeValue.textContent = formatPrice(5000);
  featureFilters.forEach((checkbox) => {
    checkbox.checked = false;
  });

  renderCategories();
  renderProducts();
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

priceRange.addEventListener("input", (event) => {
  state.maxPrice = Number(event.target.value);
  priceRangeValue.textContent = formatPrice(state.maxPrice);
  renderProducts();
});

featureFilters.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    state.selectedFeatures = featureFilters
      .filter((input) => input.checked)
      .map((input) => input.value);
    renderProducts();
  });
});

clearFiltersButton.addEventListener("click", clearFilters);
cartButton.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

checkoutButton.addEventListener("click", () => {
  if (state.cart.length === 0) {
    alert("Your cart is empty right now.");
    return;
  }

  alert("Demo checkout complete. Thank you for exploring Paayal Kolhapuri.");
  state.cart = [];
  saveCart();
  renderCart();
  closeCart();
});

productModal.addEventListener("click", (event) => {
  const rect = productModal.getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) {
    closeModal();
  }
});

interestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const submission = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    category: document.getElementById("interest-category").value,
    submittedAt: new Date().toISOString()
  };

  const entries = JSON.parse(localStorage.getItem("pk-interest") || "[]");
  entries.push(submission);
  localStorage.setItem("pk-interest", JSON.stringify(entries));
  formMessage.textContent = `Thanks ${submission.name}. We saved your interest in ${submission.category}.`;
  interestForm.reset();
});

renderCategories();
renderProducts();
renderBestsellers();
renderCart();