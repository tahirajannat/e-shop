// Fetch the product data from the product_data.json file
const productList = document.getElementById("product-list");

// fetchProducts.js
// export async function fetchProducts() {

const apiUrl = "../data/products.json"; // Replace with your API endpoint

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch data.");
        }
        // console.log("response", response);
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Map the array of products and generate HTML markup
async function productCard() {
    const data = await fetchData();
    console.log("products", data);
    const productMarkup = data
        .map(
            (product) => `
        <div
        class="bg-white w-full shadow-md hover:scale-105 hover:shadow-xl duration-500 product-card"
    >
    <div class="relative overflow-hidden group">
    <a href="#">
        <img
            id="ImageTagId"
            src=${product.image}
            alt="Product image"
            class="h-52 w-full object-cover ImageTagId"
        />
    </a>
    <div
        class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
    >
        <button onclick="addToWishList(${product.id})"
            class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
        >
            <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5 text-red-600"
                viewBox="0 0 24 24"
            >
                <path
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                ></path>
            </svg>
        </button>
        <button
            class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 addToCart"
        >
            <svg
                class="w-5 h-5 text-red-600"
                height="800"
                width="800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                xml:space="preserve"
            >
                <path
                    d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6-1.5-.1-2.8-.4-4.3-.4-53 0-96 43-96 96s43 96 96 96 96-43 96-96c0-1.5-.4-2.8-.4-4.3-7.4 2.6-15.3 4.3-23.6 4.3-39.8 0-72-32.2-72-72z"
                />
            </svg>
        </button>
    </div>
</div>
<div class="px-4">
    <span class="text-gray-400 mr-3 uppercase text-xs"
        >${product.brand}</span
    >
    <h3
        class="text-base font-bold text-black line-clamp-2 block capitalize"
    >
        ${product.title}
    </h3>
    <div class="flex items-center mt-2.5">
        <svg
            class="w-4 h-4 text-pink-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
        </svg>
        <svg
            class="w-4 h-4 text-pink-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
        </svg>
        <svg
            class="w-4 h-4 text-pink-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
        </svg>
        <svg
            class="w-4 h-4 text-pink-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
        </svg>
        <svg
            class="w-4 h-4 text-pink-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
        </svg>
        <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
            >5.0</span
        >
    </div>
    <div class="flex items-center justify-between">
        <p
            class="regularPrice text-lg font-semibold text-black cursor-auto my-3"
        >
            ${product.price}
        </p>
        <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">
                $199
            </p>
        </del>
        <div class="ml-auto">
            <button
                class="add-to-cart bg-pink-600 px-3 py-1 rounded border-0 inline-flex items-center justify-center text-white ml-4 capitalize text-sm" onclick="addToCart(${product.id})"
            >
                <svg
                    class="w-4 h-4 mr-1 text-red-600"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    width="800"
                    height="800"
                    viewBox="0 0 65.55 55.163"
                    xml:space="preserve"
                >
                    <path
                        d="M64.204 0h-7.128L51.53 15.656c-.249-.08-.501-.155-.775-.155H2.576A2.565 2.565 0 0 0 0 18.057L5.046 39.15c.661 1.847 1.152 2.555 2.575 2.555H43.03c.272 0 .521-.075.767-.153.077.025.154.028.231.04.163.239.281.511.281.822v2.833c0 .826-.675 1.497-1.507 1.497H7.133c-.743 0-1.346.598-1.346 1.335 0 .738.603 1.336 1.346 1.336h5.079a3.491 3.491 0 0 0-.798 2.208c0 1.954 1.598 3.541 3.568 3.541s3.566-1.586 3.566-3.541c0-.84-.306-1.601-.797-2.208h15.86a3.501 3.501 0 0 0-.796 2.208c0 1.954 1.597 3.541 3.568 3.541 1.97 0 3.565-1.586 3.565-3.541 0-.84-.307-1.601-.797-2.208h3.651c2.315 0 4.199-1.87 4.199-4.168v-2.833c0-1.08-.426-2.055-1.107-2.796L58.981 2.671h5.223c.743 0 1.346-.599 1.346-1.336S64.947 0 64.204 0z"
                    />
                </svg>
                add to cart
            </button>
        </div>
    </div>
</div>
</div>
    
  `
        )
        .join("");

    // Insert the generated markup into the product list container
    productList.insertAdjacentHTML("beforeend", productMarkup);
}
productCard();
//Sidebar
function filterCategories(data) {
    return [...new Set(data.map((product) => product.category))];
}
function filterBrands(data) {
    return [...new Set(data.map((product) => product.brand))];
}
async function filterAndCountByCategory() {
    const data = await fetchData();
    const categoryCounts = {};

    for (const product of data) {
        const { category } = product;

        if (categoryCounts.hasOwnProperty(category)) {
            categoryCounts[category]++;
        } else {
            categoryCounts[category] = 1;
        }
    }

    updateCategoriesAndItemCount(categoryCounts);
    handleCheckboxChange();
}
async function filterAndCountByBrand() {
    const data = await fetchData();
    const brandCounts = {};

    for (const product of data) {
        const { brand } = product;

        if (brandCounts.hasOwnProperty(brand)) {
            brandCounts[brand]++;
        } else {
            brandCounts[brand] = 1;
        }
    }

    updateBrandsAndItemCount(brandCounts);
}
//end  updateBrandsAndItemCount()
async function updateCategoriesAndItemCount(categoryCounts) {
    const categoryFilter = document.getElementById("categoryFilter");

    const categoryFilterTemplate = Object.keys(categoryCounts)
        .map(
            (category) => `
        <div class="flex items-center">
        <input
            id="category-0"
            name="category[]"
            value=${category}
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label
            for="category-0"
            class="ml-3 text-sm text-gray-600"
            >${category} </label >
            <span id="countCat" class="totalCount px-2 py-0.5 bg-gray-200 text-xs rounded ml-2 text-pink-600">${categoryCounts[category]}</span>
    </div>`
        )
        .join("");

    categoryFilter.insertAdjacentHTML("afterbegin", categoryFilterTemplate);
}
filterAndCountByCategory();
//end updateCategoriesAndItemCount()

async function updateBrandsAndItemCount(brandCounts) {
    const data = await fetchData();
    const brandFilter = document.getElementById("brandFilter");

    const brands = filterBrands(data);
    console.log(brands);
    const brandFilterTemplate = Object.keys(brandCounts)
        .map(
            (brand) => `
        <div class="flex items-center">
        <input
            id="category-0"
            name="category[]"
            value="new-arrivals"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label
            for="category-0"
            class="ml-3 text-sm text-gray-600"
            >
            ${brand}
        </label>
        <span class="px-2 py-0.5 bg-gray-200 text-xs rounded ml-2 text-pink-600">${brandCounts[brand]}</span>
    </div>`
        )
        .join("");

    brandFilter.insertAdjacentHTML("afterbegin", brandFilterTemplate);
}
filterAndCountByBrand();
// end updateBrandsAndItemCount()

const priceSlider = document.getElementById("price");
const selectedPrice = document.getElementById("selected-price");

// Update the displayed price when the slider value changes
priceSlider.addEventListener("input", (event) => {
    const price = event.target.value;
    selectedPrice.innerText = `$${price}`;
});

// filtered items
const checkboxContainer = document.getElementById("checkbox-container");

// Add a single event listener to the checkbox container
checkboxContainer.addEventListener("change", handleCheckboxChange);

// Event handler for checkbox change event
async function handleCheckboxChange(event) {
    // Get the checkbox that triggered the event
    const data = await fetchData();

    // const category = filterCategories(data);
    // let categoryupdate = {};
    // console.log("object", category);
    const checkbox = event.target;
    const categoryFilterList = document.getElementById("product-list");
    // Check if it is a checkbox
    if (checkbox.type === "checkbox") {
        // Check if the checkbox is checked or unchecked
        for (const product of data) {
            const { category } = product;
            if (checkbox.checked && checkbox.value === category) {
                console.log(`${checkbox.value} is checked.`);
                console.log(`${category} is tested.`);
                

                categoryFilterList.innerHTML = {data.map((product)=>(
                    ` <div
                    class="bg-white w-full shadow-md hover:scale-105 hover:shadow-xl duration-500 product-card"
                >
                <div class="relative overflow-hidden group">
                <a href="#">
                    <img
                        id="ImageTagId"
                        src=${product.image}
                        alt="Product image"
                        class="h-52 w-full object-cover ImageTagId"
                    />
                </a>
                <div
                    class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                    <button onclick="addToWishList(${product.id})"
                        class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                    >
                        <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5 text-red-600"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                            ></path>
                        </svg>
                    </button>
                    <button
                        class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 addToCart"
                    >
                        <svg
                            class="w-5 h-5 text-red-600"
                            height="800"
                            width="800"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            xml:space="preserve"
                        >
                            <path
                                d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6-1.5-.1-2.8-.4-4.3-.4-53 0-96 43-96 96s43 96 96 96 96-43 96-96c0-1.5-.4-2.8-.4-4.3-7.4 2.6-15.3 4.3-23.6 4.3-39.8 0-72-32.2-72-72z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="px-4">
                <span class="text-gray-400 mr-3 uppercase text-xs"
                    >${product.brand}</span
                >
                <h3
                    class="text-base font-bold text-black line-clamp-2 block capitalize"
                >
                    ${product.title}
                </h3>
                <div class="flex items-center mt-2.5">
                    <svg
                        class="w-4 h-4 text-pink-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                    </svg>
                    <svg
                        class="w-4 h-4 text-pink-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                    </svg>
                    <svg
                        class="w-4 h-4 text-pink-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                    </svg>
                    <svg
                        class="w-4 h-4 text-pink-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                    </svg>
                    <svg
                        class="w-4 h-4 text-pink-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                    </svg>
                    <span
                        class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
                        >5.0</span
                    >
                </div>
                <div class="flex items-center justify-between">
                    <p
                        class="regularPrice text-lg font-semibold text-black cursor-auto my-3"
                    >
                        ${product.price}
                    </p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">
                            $199
                        </p>
                    </del>
                    <div class="ml-auto">
                        <button
                            class="add-to-cart bg-pink-600 px-3 py-1 rounded border-0 inline-flex items-center justify-center text-white ml-4 capitalize text-sm" onclick="addToCart(${product.id})"
                        >
                            <svg
                                class="w-4 h-4 mr-1 text-red-600"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                                width="800"
                                height="800"
                                viewBox="0 0 65.55 55.163"
                                xml:space="preserve"
                            >
                                <path
                                    d="M64.204 0h-7.128L51.53 15.656c-.249-.08-.501-.155-.775-.155H2.576A2.565 2.565 0 0 0 0 18.057L5.046 39.15c.661 1.847 1.152 2.555 2.575 2.555H43.03c.272 0 .521-.075.767-.153.077.025.154.028.231.04.163.239.281.511.281.822v2.833c0 .826-.675 1.497-1.507 1.497H7.133c-.743 0-1.346.598-1.346 1.335 0 .738.603 1.336 1.346 1.336h5.079a3.491 3.491 0 0 0-.798 2.208c0 1.954 1.598 3.541 3.568 3.541s3.566-1.586 3.566-3.541c0-.84-.306-1.601-.797-2.208h15.86a3.501 3.501 0 0 0-.796 2.208c0 1.954 1.597 3.541 3.568 3.541 1.97 0 3.565-1.586 3.565-3.541 0-.84-.307-1.601-.797-2.208h3.651c2.315 0 4.199-1.87 4.199-4.168v-2.833c0-1.08-.426-2.055-1.107-2.796L58.981 2.671h5.223c.743 0 1.346-.599 1.346-1.336S64.947 0 64.204 0z"
                                />
                            </svg>
                            add to cart
                        </button>
                    </div>
                </div>
            </div>
            </div>`
                ))}
                
            } else {
                console.log(`${checkbox.value} is unchecked.`);
                // Perform any actions you need when the checkbox is unchecked.
            }
        }
    }
}
