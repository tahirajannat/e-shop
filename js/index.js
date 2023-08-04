const headerHTML = `<div class="container mx-auto px-4 py-2 flex items-center">
<!-- logo -->
<div class="mr-auto md:w-48">
    <img class="h-16" src="./img/logoNew.png" alt="" />
</div>

<!-- search -->
<div
    class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center"
>
    <select
        class="bg-transparent uppercase font-bold text-sm p-4 mr-4"
        name=""
        id=""
    >
        <option>all categories</option>
    </select>
    <input
        class="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4 py-3 w-[63%] focus:outline-1 outline-gray-300 focus:rounded-none"
        type="text"
        placeholder="I'm searching for ..."
    />
    <svg
        class="ml-auto h-5 px-4 text-gray-500"
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="search"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="svg-inline--fa fa-search fa-w-16 fa-9x"
    >
        <path
            fill="currentColor"
            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
        ></path>
    </svg>
</div>

<!-- phone number -->
<div
    class="ml-auto md:w-48 hidden sm:flex flex-col place-items-end"
>
    <span class="font-bold md:text-xl">8 800 332 65-66</span>
    <span class="font-semibold text-sm text-gray-400"
        >Support 24/7</span
    >
</div>

<!-- buttons -->
<nav class="contents">
    <ul class="ml-4 xl:w-48 flex items-center justify-end">
        <li class="ml-2 lg:ml-4 relative inline-block">
            <button
                class=""
                onclick="window.location.href='/signInSignUp.html'"
            >
                <svg
                    class="h-9 lg:h-10 p-2 text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="user"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="svg-inline--fa fa-user fa-w-14 fa-9x"
                >
                    <path
                        fill="currentColor"
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                    ></path>
                </svg>
            </button>
        </li>
        <li class="ml-2 lg:ml-4 relative inline-block">
            <button id="addToWishList">
                <div
                    id="totalWishListItemsCount"
                    class="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm"
                >
                    0
                </div>
                <svg
                    class="h-9 lg:h-10 p-2 text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="heart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="svg-inline--fa fa-heart fa-w-16 fa-9x"
                >
                    <path
                        fill="currentColor"
                        d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                    ></path>
                </svg>
            </button>
            <div
                id="shoppingWishList"
                class="absolute z-50 hidden inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-96 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5"
            >
                <h2 class="sr-only">Shopping Cart</h2>

                <form class="mx-auto max-w-2xl px-4" id="">
                    <ul
                        role="list"
                        class="divide-y divide-gray-200"
                        id="wishListItems"
                    >
                        <!-- More products... -->
                    </ul>
                </form>
            </div>
        </li>
        <li class="ml-2 lg:ml-4 relative inline-block">
            <button id="addToCart">
                <div
                    id="totalCartItemsCount"
                    class="absolute -top-1 right-0 z-10 bg-pink-600 text-white text-xs font-bold px-1 py-0.5 rounded-sm"
                >
                    0
                </div>
                <svg
                    class="h-9 lg:h-10 p-2 text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="shopping-cart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    class="svg-inline--fa fa-shopping-cart fa-w-18 fa-9x"
                >
                    <path
                        fill="currentColor"
                        d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                    ></path>
                </svg>
            </button>
            <div
                id="shoppingCart"
                class="absolute z-50 hidden inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-96 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5"
            >
                <h2 class="sr-only">Shopping Cart</h2>

                <form class="mx-auto max-w-2xl px-4" id="cart">
                    <ul
                        role="list"
                        class="divide-y divide-gray-200"
                        id="cartItems"
                    >
                        <!-- More products... -->
                    </ul>
                    <div
                        id="totalPrice"
                        class="w-full text-center mt-5 px-4 py-2 text-sm font-medium text-black"
                    >
                        Subtotal(0 items): $0
                    </div>
                    <div id="goToCheckout"></div>
                </form>
            </div>
        </li>
    </ul>
</nav>

<!-- cart count -->
<div class="ml-4 hidden sm:flex flex-col font-bold">
    <span class="text-xs text-gray-400">Your Cart</span>
    <span id="cartTotal">$0</span>
</div>
</div>

<hr />`;

let headerContainer = document.getElementById("mainNav");
headerContainer.innerHTML = headerHTML;

//

// Get the product list container element
// const productList = document.getElementById("product-list");
const totalPriceCount = document.getElementById("totalPrice");
const totalCartItemsCount = document.getElementById("totalCartItemsCount");
const goToCheckout = document.getElementById("goToCheckout");
const cartTotal = document.getElementById("cartTotal");
//Cart button show hide
const shoppingCartDropdown = document.querySelector("#shoppingCart");
const cart = document.querySelector("#addToCart");
const cartItems = document.getElementById("cartItems");

//wishtlist html elements
const wishList = document.querySelector("#addToWishList");
const wishListDropdown = document.querySelector("#shoppingWishList");
const WishListItems = document.getElementById("wishListItems");
const totalWishListItemsCount = document.getElementById(
    "totalWishListItemsCount"
);

cart.addEventListener("click", () => {
    shoppingCartDropdown.style.display =
        shoppingCartDropdown.style.display === "block" ? "none" : "block";
});
// Function to handle adding a product to the cart
//cart array
let shoppingCart = [];

function addToCart(productId) {
    //if the product alredy exist
    if (shoppingCart.some((product) => product.id === productId)) {
    } else {
        const product = products.find((product) => product.id === productId);
        console.log("product", product);
        shoppingCart.push({
            ...product,
            numberOfUnits: 1,
        });

        updateCart();
        checkoutButtonVisibility();
    }
}

//checkout visibility
function checkoutButtonVisibility() {
    if (shoppingCart.length === 1) {
        goToCheckout.innerHTML += `<button
        type="submit"
        class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
    >
        Checkout
    </button>

    <p class="mt-6 text-center">
        <a
            href="#"
            class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >View Shopping Bag</a
        >
    </p>`;
    }
}

//Update Cart

function updateCart() {
    renderCartItems();
    renderSubtotal();
}
///calculte Product Price
function renderSubtotal() {
    let totalPrice = 0;
    let totalItems = 0;
    shoppingCart.forEach((product) => {
        totalPrice += product.price * product.numberOfUnits;
        totalItems += product.numberOfUnits;
    });
    totalPriceCount.innerHTML = `Subtotal (${totalItems} products): $${totalPrice.toFixed(
        2
    )}`;
    cartTotal.innerHTML = `$${totalPrice.toFixed(2)}`;
    totalCartItemsCount.innerHTML = `${totalItems}`;
}
//Render Cart Items
const cartTemplate = (product) => `<li class="flex items-center py-6">
<img
    src="${product.image}"
    alt="${product.title}"
    class="h-16 w-16 flex-none rounded-md border border-gray-200"
/>
<div class="ml-4 flex-auto">
    <h2
        class="font-medium text-gray-900"
    >
        <a href="#">${product.title}</a>
    </h2>
    <p class="text-gray-500">
        ${product.price}
    </p>
    <h3
        class="text-red-500 text-xs"
    >
    ${product.brand}
    </h3>
    <button
        onclick="removeProductsFromCart(${product.id})"
        class="font-semibold hover:text-red-500 text-gray-500 text-xs"
        >Remove
    </button>
</div>
<div
    class="flex items-center justify-center w-1/5"
>
    <button onclick="changeNumberOfUnits('minus',${product.id})"> - </button>

    <input
        class="mx-2 border text-center w-8 text-black"
        type="text"
        value="${product.numberOfUnits}"
    />
  

  <button onclick="changeNumberOfUnits('plus', ${product.id})"> + </button>
</div>
</li>`;
function renderCartItems() {
    cartItems.innerHTML = "";
    shoppingCart.forEach((product) => {
        cartItems.insertAdjacentHTML("beforeend", cartTemplate(product));
    });
}

//change number of units
function changeNumberOfUnits(action, productId) {
    console.log("shopping cart items", shoppingCart);

    shoppingCart.map((product) => {
        let numberOfUnits = product.numberOfUnits;
        console.log("number of units", numberOfUnits);
        if (product.id === productId) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits = product.numberOfUnits--;
            } else if (action === "plus" && numberOfUnits < product.inStock) {
                numberOfUnits = product.numberOfUnits++;
            }
            return {
                ...product,
                numberOfUnits: numberOfUnits,
            };
        }
    });

    updateCart();
}

//Remove items From cart
function removeProductsFromCart(productId) {
    shoppingCart = shoppingCart.filter((product) => product.id != productId);
    updateCart();
    checkoutButtonVisibility();
}

//Add to Wishlist
let shoppingWishlist = [];
wishList.addEventListener("click", () => {
    wishListDropdown.style.display =
        wishListDropdown.style.display === "block" ? "none" : "block";
});
//Render Wishlist Items
const wishListTemplate = (product) => `<li class="flex items-center py-6">
<img
    src="${product.image}"
    alt="${product.title}"
    class="h-16 w-16 flex-none rounded-md border border-gray-200"
/>
<div class="ml-4 flex-auto">
    <h2
        class="font-medium text-gray-900"
    >
        <a href="#">${product.title}</a>
    </h2>
    <p class="text-gray-500">
        ${product.price}
    </p>
    <h3
        class="text-red-500 text-xs"
    >
    ${product.brand}
    </h3>
    <button
        onclick="removeProductsFromCart(${product.id})"
        class="font-semibold hover:text-red-500 text-gray-500 text-xs"
        >Remove
    </button>
</div>

</li>`;
function addToWishList(productId) {
    //if the product alredy exist
    if (shoppingWishlist.some((product) => product.id === productId)) {
    } else {
        const product = products.find((product) => product.id === productId);
        console.log("product", product);
        shoppingWishlist.push({
            ...product,
            numberOfUnits: 1,
        });

        updateWishList();
        // checkoutButtonVisibility();
    }
}
function renderWishListtItems() {
    WishListItems.innerHTML = "";
    shoppingWishlist.forEach((product) => {
        WishListItems.insertAdjacentHTML(
            "beforeend",
            wishListTemplate(product)
        );
    });
}
///calculte Product Price
function renderWishList() {
    let totalItems = 0;
    shoppingWishlist.forEach((product) => {
        totalItems += product.numberOfUnits;
    });

    totalWishListItemsCount.innerHTML = `${totalItems}`;
}

//Update wishlist
function updateWishList() {
    renderWishListtItems();
    renderWishList();
}
