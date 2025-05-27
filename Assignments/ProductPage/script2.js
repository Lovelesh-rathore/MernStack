async function products() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const products = document.getElementById("products");
  products.innerHTML = "";

  data.forEach((element) => {
    const d = document.createElement("div");
    d.classList.add("product-container","col-4", "my-2", "bg-light", "rounded")
    d.innerHTML = `
            <div class="text-center m-2">
              <img class="object-fit-contain" style="height: 300px ; width: 100%" src=${element.image} />
            </div>
            <div class="my-2 mx-3">
              <h5 class="title">${element.title.length>30 ? element.title.slice(0,30)+ "..." : element.title}</h5>
              <h5 class="price">${element.price}</h5>
              <h6 class="category text-muted">${element.category}</h6>
              <div>
                <button class="btn btn-primary">Buy Now</button>
                <button class="btn btn-outline-primary">Add to Cart</button>
              </div>
            </div>
          `;

    products.appendChild(d);
  });
}

products();
