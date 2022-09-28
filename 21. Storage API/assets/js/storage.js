
// Basket

let addBasketButtons = document.querySelectorAll(".addToCart");

if (localStorage.getItem("basket") === null) {
  localStorage.setItem("basket", JSON.stringify([]));
}

addBasketButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (localStorage.getItem("basket") === null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    let price = this.previousElementSibling.children[0].innerText;
    let model = this.parentElement.children[0].innerText;
    let image = this.parentElement.previousElementSibling.src;
    let Id = this.getAttribute("data-id");

    let existedProduct = basket.find((p) => p.Id == Id);

    if (existedProduct == undefined) {
      let product = {
        Id,
        price,
        model,
        image,
        count: 1,
      };
      basket.push(product);
    } else {
      existedProduct.count++;
    }

    localStorage.setItem("basket", JSON.stringify(basket));
    productCount();
    totalPrice();
  });
});

productCount();

function productCount() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let countElement = document.querySelector(".countProduct");
  let count = 0;

  basket.forEach((p) => {
    count += p.count;
  });
  countElement.innerText = count;
}
totalPrice();

function totalPrice() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let priceElement = document.querySelector(".totalPrice");
  

  let total = basket.reduce((total, p) => {
    return (total += p.price * p.count);
  }, 0);
  priceElement.innerText = total;
}
