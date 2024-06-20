let bagProducts;
onLoad();
function onLoad() {
  getBagItems();
  showBagItems();
}

function getBagItems() {
  let bItems = JSON.parse(localStorage.getItem("bagItems"));
  bagProducts = bItems.map((productId) => {
    for (let index = 0; index < products.length; index++) {
      if (productId == products[index].id) {
        return products[index];
      }
    }
  });
}
function removebagItem(productId) {
  console.log(productId);
  let bItems = JSON.parse(localStorage.getItem("bagItems"));
  let updatedBagItems = bItems.filter((item) => {
    return item != productId;
  });
  localStorage.setItem("bagItems", JSON.stringify(updatedBagItems));
  getBagItems();
  showBagItems();
}

function showBagItems() {
  let cart_item_list = document.querySelector("#cart_item_list");
  let bagtItems = "";

  bagProducts.forEach((product) => {
    return (bagtItems += `<div class="item_container">
      <div class="item_left">
        <a href="../pages/productDetails.html?id=${product.id}">
          <img
            src="${product.images[0]}"
            alt="cart item image"
          />
        </a>
      </div>
      <div class="item_right">
        <div class="details">
          <div>
            <div class="brand">${product.brand}</div>
            <a href=""></a>
          </div>
          <div class="seller_container">
            <div class="seller_data">
              "Sold By: " "Page Industries Ltd"
            </div>
          </div>
          <div class="sizeAndQuantity_container">Size: M Qty: 1</div>
          <div class="price">Rs. ${
            (product.price * (100 - product.discountPercent)) / 100
          }</div>
          <div class="returnInfo_container">Returnable</div>
          <div class="deliveryMessage_conatiner">
            Deliver by 10 jan 2024
          </div>
        </div>
      </div>
      <div class="close_icon" onclick="removebagItem(${product.id})">
                  <span class="material-symbols-outlined">
                    close
                    </span>
                </div>
    </div>
  `);
  });

  cart_item_list.innerHTML = bagtItems;
}
