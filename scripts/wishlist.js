let wishListedProduct;
getWishlistItems();

function getWishlistItems() {
  let wItems = JSON.parse(localStorage.getItem("wishListItem"));
  wishListedProduct = wItems.map((productId) => {
    /* products.forEach((element) => {
      if (element.id == productId) {
        return element;
      }
    }); */
    for (let index = 0; index < products.length; index++) {
      if (productId == products[index].id) {
        return products[index];
      }
    }
  });
  console.log("wishListedProduct : ", wishListedProduct);
}
function removeWishlistedItem(productId) {
  let wItems = JSON.parse(localStorage.getItem("wishListItem"));
  let updatedWislistedItems = wItems.filter((item) => {
    return item != productId;
  });
  localStorage.setItem("wishListItem", JSON.stringify(updatedWislistedItems));
  getWishlistItems();
  showWishlistAddedItems();
}

showWishlistAddedItems();
function showWishlistAddedItems() {
  let wishlist_container = document.querySelector("#wishlist_container");
  let wishlistItems = "";

  wishListedProduct.forEach((product) => {
    return (wishlistItems += `<div class="item_card">
    <div class="itemCard_img">
    <a href="../pages/productDetails.html?id=${product.id}">
      <img
        src="${product.images[0]}"
        alt=""
      />
      </a>
      <div class="close_icon" onclick="removeWishlistedItem(${product.id})">
                  <span class="material-symbols-outlined">
                    close
                    </span>
                </div>
    </div>
    <div class="itemCard_action">
      <div class="itemCard_details">
        <p class="itemDetail_label">
          <span>${product.title}</span>
        </p>
        <div class="item_pricing">
          <span class="actual_price">Rs ${product.price}</span>
          <span class="original_price">Rs ${product.price}</span>
          <span class="discount_percentage">(${product.discountPercent}% OFF)</span>
        </div>
      </div>
      <div class="itemCard_action_container">
        <button>Move to Bag</button>
      </div>
    </div>
  </div>
`);
  });

  wishlist_container.innerHTML = wishlistItems;
}
