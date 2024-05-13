let wishlistItems;
let womensProduct;
let mensProduct;
onLoad();

function onLoad() {
  let wItem = localStorage.getItem("wishListItem");
  wishlistItems = wItem ? JSON.parse(wItem) : [];
  getTrendingWomensClothing();
  getTrendingMensClothing();
  displayTrendingWomensClothing();
  displayTrendingMensClothing();
  displayWishlistItemsCount();
}

function addToWishlist(productId) {
  wishlistItems.push(productId);
  localStorage.setItem("wishListItem", JSON.stringify(wishlistItems));
  displayWishlistItemsCount();
}

function getTrendingWomensClothing() {
  womensProduct = products.filter((product) => {
    return product.category == "Women";
  });
  console.log("womensProduct : ", womensProduct);
}

function getTrendingMensClothing() {
  mensProduct = products.filter((product) => {
    return product.category == "Men";
  });
  console.log("mensProduct : ", mensProduct);
}

function displayWishlistItemsCount() {
  console.log("displayWishlistItemsCount function called");
  let wishlistItem_count = document.querySelector("#wishlistItem_count");
  if (wishlistItems.length > 0) {
    wishlistItem_count.style.visibility = "visible";
    wishlistItem_count.innerText = wishlistItems.length;
  } else {
    wishlistItem_count.style.visibility = "hidden";
  }
}

function displayTrendingWomensClothing() {
  let trendingWomensClothing = document.querySelector(
    "#trendingWomensClothing"
  );
  let productCards = "";
  womensProduct.forEach((product) => {
    return (productCards += `
      <div class="sale_item">
        <a href="pages/productDetails.html?id=${product.id}">
          <img class="item_image" src="${product.images[0]}" alt=""></img>
        </a>
        <div class="product_details">
          <h3 class="product_brand">${product.brand}</h3>
          <h4 class="product_desc">${product.title}</h4>
          <div class="product_price">
            <span>
              <span class="product_discountedPrice">
                Rs. ${(product.price * (100 - product.discountPercent)) / 100}
              </span>
              <span class="product_strike"> Rs. ${product.price}</span>
            </span>
            <span class="product_discountPercentage">
              (${product.discountPercent}% OFF)
            </span>
          </div>
        </div>
        <div class="item_details_on_hover">
          <button onclick="addToWishlist(${product.id})">
            <div class="Wishlist_button">
              <span class="material-symbols-outlined">favorite</span>
              <span>Wishlist</span>
            </div>
          </button>
          <h4 class="product_sizes"> Sizes</h4>
        </div>
      </div>
    `);
  });

  trendingWomensClothing.innerHTML = productCards;
}

function displayTrendingMensClothing() {
  let trendingMensClothing = document.querySelector("#trendingMensClothing");
  let productCards = "";
  mensProduct.forEach((product) => {
    return (productCards += `
      <div class="sale_item">
        <a href="pages/productDetails.html?id=${product.id}">
          <img class="item_image" src="${product.images[0]}" alt=""></img>
        </a>
        <div class="product_details">
          <h3 class="product_brand">${product.brand}</h3>
          <h4 class="product_desc">${product.title}</h4>
          <div class="product_price">
            <span>
              <span class="product_discountedPrice">
                Rs. ${(product.price * (100 - product.discountPercent)) / 100}
              </span>
              <span class="product_strike"> Rs. ${product.price}</span>
            </span>
            <span class="product_discountPercentage">
              (${product.discountPercent}% OFF)
            </span>
          </div>
        </div>
        <div class="item_details_on_hover">
          <button onclick="addToWishlist(${product.id})">
            <div class="Wishlist_button">
              <span class="material-symbols-outlined">favorite</span>
              <span>Wishlist</span>
            </div>
          </button>
          <h4 class="product_sizes"> Sizes</h4>
        </div>
      </div>
    `);
  });

  trendingMensClothing.innerHTML = productCards;
}
