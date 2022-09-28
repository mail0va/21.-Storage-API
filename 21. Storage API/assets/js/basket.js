let row = document.querySelector(".row");
if (
  localStorage.getItem("basket") === null ||
  localStorage.getItem("basket") == "[]"
) {
  localStorage.setItem("basket", JSON.stringify([]));
  let div = document.createElement("div");
  let p = document.createElement("p");

  p.innerText = "Your basket is empty";
  p.style.fontSize = "30px";
  div.appendChild(p);
  row.append(div);
} else {
  let basket = JSON.parse(localStorage.getItem("basket"));

  basket.forEach((p) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    let pCount = document.createElement("p");
    let pPrice = document.createElement("p");

    div.className = "col-lg-3";

    image.style.width = "150px";
    image.src = p.image;

    pCount.innerText = "Count: " + p.count;

    pPrice.innerText = "Price: " + p.price + "$";

    div.append(image, pCount, pPrice);

    row.append(div);
  });
}
