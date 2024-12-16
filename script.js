// filter runction
function applyFilters() {
  var availabilityFilters = Array.from(
    document.getElementsByClassName("availability-filter"),
  );
  var selectedAvailability = availabilityFilters
    .filter((filter) => filter.checked)
    .map((filter) => filter.value);

  var priceMin = document.getElementById("price-filter-min").value;
  var priceMax = document.getElementById("price-filter-max").value;

  var manufacturerFilter = document.getElementById("manufacturer-filter").value;
  var storageFilter = document.getElementById("storage-filter").value;

  var OSFilter = document.getElementById("OS-filter").value;

  var cards = document.getElementsByClassName("product-card");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var availability = card.getAttribute("data-availability");
    var price = parseInt(card.getAttribute("data-price"));
    var manufacturer = card.getAttribute("data-manufacturer");
    var storage = card.getAttribute("data-storage");
    var OS = card.getAttribute("data-OS");

    if (
      (selectedAvailability.length === 0 ||
        selectedAvailability.includes(availability)) &&
      (priceMin === "" || price >= parseInt(priceMin)) &&
      (priceMax === "" || price <= parseInt(priceMax)) &&
      (manufacturerFilter === "all" || manufacturer === manufacturerFilter) &&
      (storageFilter === "all" || storage === storageFilter) &&
      (OSFilter === "all" || OS === OSFilter)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

// open and close cart window
const openCartBtn = document.getElementById("open-cart-btn");
const cartWindow = document.getElementById("cart-window");

openCartBtn.addEventListener("click", function () {
  cartWindow.style.display = "block";
});

const closeCartBtn = document.getElementById("close-cart-btn");

closeCartBtn.addEventListener("click", function () {
  cartWindow.style.display = "none";
});

//add to cart function
function addToCart(name, image, price, description) {
  console.log(name, image, price, description);
  const product = { name, image, price, description };
  const cartItemsElement = document.getElementById("cart-items");
  const productCard = document.createElement("div");
  productCard.classList.add("cart-item");
  productCard.innerHTML = `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name} - ${product.price} руб</h3>
      <p>${product.description}</p>
      <button class="remove-item-btn" onclick="removeFromCart(this)">Удалить</button>
    </div>`;
  cartItemsElement.appendChild(productCard);

  //  document.getElementById("cart-window").style.display = "block";
}

function removeFromCart(button) {
  button.parentElement.parentElement.remove();
}

document.getElementById("filters").addEventListener("change", applyFilters);

applyFilters();
