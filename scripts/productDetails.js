const urlParams = new URLSearchParams(window.location.search);
console.log("page url : ", window.location.href);
console.log("page url parameter : ", window.location.search);

const productId = urlParams.get("id");
const product = products.filter((p) => p.id == productId).reduce((r) => r);
console.log(product);
let bagItems;

onLoad();
function onLoad() {
  let bItem = localStorage.getItem("bagItems");
  bagItems = bItem ? JSON.parse(bItem) : [];
  displayProductDetails();
}
function showImages() {
  const left_details = document.querySelector("#left_details");
  let images = "";
  for (let index = 0; index < product.images.length; index++) {
    images += `<div class="image">
      <img src="${product.images[index]}" alt="" />
    </div>`;
  }
  return images;
}

function addToBag(productId) {
  bagItems.push(productId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  console.log(localStorage.getItem("bagItems"));
}

function displayProductDetails() {
  let productDetails = document.querySelector("#productDetails");
  let pDetails = "";
  pDetails = `
  <div id="left_details" class="left_details">
              ${showImages()}
            </div>
            <div class="right_details">
              <div class="product_brand">${product.brand}</div>
              <div class="product_name">${product.title}</div>
              <div class="overAll_rating_container">
                <div class="overAll_rating">
                  <div>3.6</div>
                  <span class="material-symbols-outlined"> star </span>
                  <div>|</div>
                  <div class="rating_counts">887 Ratings</div>
                </div>
              </div>
              <div class="price_discounts">
                <span class="discounted_price">Rs ${
                  (product.price * (100 - product.discountPercent)) / 100
                }</span>
                <span class="price">MRP ${product.price}</span>
                <span class="discounted_percentage">(${
                  product.discountPercent
                }% oFF)</span>
              </div>
              <div class="vat_info">inclusive of all taxes</div>
              <div class="size_chart_container">
                <div class="size_headers">
                  <h4>Select Size</h4>
                  <span class="size_chart"
                    >Size Chart
                    <span class="material-symbols-outlined size_button_arrow">
                      chevron_right
                    </span>
                  </span>
                </div>
                <div class="size_buttons">
                  <div class="button"></div>
                  <div class="button"></div>
                  <div class="button"></div>
                  <div class="button"></div>
                  <div class="button"></div>
                </div>
              </div>
              <div class="addToBagAndWishlist_container">
                <div class="addToBag" onclick="addToBag(${product.id})">
                  <span class="material-symbols-outlined"> local_mall </span>
                  Add To Bag
                </div>
                <div class="wishlist">
                  <span class="material-symbols-outlined"> favorite </span>
                  Wishlist
                </div>
              </div>
            </div>
  `;

  productDetails.innerHTML = pDetails;
}
