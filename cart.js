//document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart-item")) || [];

    let cartElement = document.getElementById("cart");
    if (cartItems.length) {
        cartItems.forEach((item) => {
            let itemElement = document.createElement("div");
            itemElement.textContent = item.name + " - $" + item.price;
            cartElement.appendChild(itemElement);
        });
    } else {
        let emptyCartMessage = document.createElement("p");
        emptyCartMessage.textContent = "Ваша корзина пуста";
        cartElement.appendChild(emptyCartMessage);
    }
//});
