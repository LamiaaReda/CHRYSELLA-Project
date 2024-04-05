let links = document.querySelector("#links");
let userInfo = document.querySelector("#user-info");
let userInfoName = document.querySelector("#user-info-name");

if (localStorage.getItem("name")) {
  links.remove();
  userInfo.style.display = "flex";
  userInfoName.innerHTML = localStorage.getItem("name");
}

let logOutBtn = document.querySelector("#logout");
logOutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1000);
});
// ////////////////////////////////////////////////////////
let allProducts = document.querySelector(".products");
let products = [
  {
    id: 1,
    title: "Ring Jewel - 600890P08",
    desc: "French Pavé Diamond Eternity Ring In Platinum (2 Ct. Tw.)",
    price: "$6,050",
    imageUrl: "img/ring.jpg",
  },
  {
    id: 2,
    title: "Necklace Jewel - 851470W14",
    desc: "Diamond 'V' Necklace In 14k White Gold (1 Ct. Tw.)",
    price: "$Price: $2,700",
    imageUrl: "img/necklace.jpg",
  },
  {
    id: 3,
    title: "Earring Jewel - 800550W",
    desc: "Sapphire And Diamond Pear Drop Earrings In 18k White Gold (7x5mm)",
    price: "$3,800",
    imageUrl: "img/earring.jpg",
  },
  {
    id: 4,
    title: "Bracelet Jewel - 751360W14",
    desc: "Oval Sapphire And Round Diamond Bracelet In 14k White Gold",
    price: "$6,050",
    imageUrl: "img/bracelet.jpg",
  },
  {
    id: 5,
    title: "Necklace Jewel - 851060W60",
    desc: "Graduated Diamond Eternity Necklace In 18k White Gold (15 Ct.Tw.)",
    price: "$48,670",
    imageUrl: "img/necklace1.jpg",
  },
  {
    id: 6,
    title: "Ring Jewel - 602840P93",
    desc: "Floating Diamond Wedding Ring In Platinum (1/3 Ct. Tw.)",
    price: "$1,400",
    imageUrl: "img/ring1.jpg",
  },
  {
    id: 7,
    title: "Earring Jewel - 80326009W",
    desc: "Sapphire And Micropavé Diamond Stud Earrings In 18k White Gold (5mm)",
    price: "$2,010",
    imageUrl: "img/earring1.jpg",
  },
];

function drawItems() {
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
          <i class="far fa-heart fav"></i>
           <button class="add-to-cart" onClick="addToCart(${item.id})">Add To Cart</button>
          </div>
      </div>
          `;
  });
  allProducts.innerHTML = y;
}
drawItems();

// ////////////////////////////////////////////////////////
let cartProductDiv = document.querySelector("#cart-details");
function addToCart(id) {
  let choosenItem = products.find((item) => item.id === id);
  cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;

  // ///////////////////////////////////////////////
  let addedItem = localStorage.getItem("productsInMyCart")
    ? JSON.parse(localStorage.getItem("productsInMyCart"))
    : [];

  addedItem = [...addedItem, choosenItem];
  localStorage.setItem("productsInMyCart", JSON.stringify(addedItem));

  ///////////////////////////////////////////// //
  let cartDetailsLength = document.querySelectorAll("#cart-details p");
  badge.style.display = "block";
  badge.innerHTML = cartDetailsLength.length;
}

// ////////////////////////////////////////////////////////
let shoppingCartIcon = document.querySelector(".cart");
let cartsProducts = document.querySelector("#cart-products");
let badge = document.querySelector(".badge");
shoppingCartIcon.addEventListener("click", opencart);

function opencart() {
  if (cartProductDiv.innerHTML != "") {
    if (cartsProducts.style.display == "block") {
      cartsProducts.style.display = "none";
    } else {
      cartsProducts.style.display = "block";
    }
  }
}

