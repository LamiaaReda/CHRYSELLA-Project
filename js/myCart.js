let productsInMyCart = localStorage.getItem("productsInMyCart");
let allProducts = document.querySelector(".products");

if (productsInMyCart) {
  let item = JSON.parse(productsInMyCart);
  drawCartProducts(item);
}

function drawCartProducts(products) {
  let y = products.map((item) => {
    return `
            <div class="product-item">
            <img class="product-item-img" src="${item.imageUrl}" alt="">
            <div class="product-item-des">
                <h3 class="product-item-title">${item.title}</h3>
                <p>${item.desc}</p>
                <span><span class="price">Price :</span> ${item.price}}</span>
            </div>
            <div class="product-item-action">
             <button class="remove-item" onClick="removeItem(${item.id})">Remove</button>
            </div>
        </div>
            `;
  });
  allProducts.innerHTML = y;
}

function removeItem(id) {
  let productsInMyCart = JSON.parse(localStorage.getItem("productsInMyCart"));
  let productIndex = productsInMyCart.findIndex((item) => item.id === id);

  if (productIndex !== -1) {
    productsInMyCart.splice(productIndex, 1);
    localStorage.setItem("productsInMyCart", JSON.stringify(productsInMyCart));
    drawCartProducts(productsInMyCart);
  }
}
