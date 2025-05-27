async function products() {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json();

  const contOut = document.getElementById("cont-out");
  contOut.innerHTML="";

  data.forEach(element => {
    const d = document.createElement("div");

    d.innerHTML=`
          <div class="container bg-light border rounded d-flex gap-4 p-2 mt-2" id="content">
            <div class="w-25 text-center">
              <img class="object-fit-contain" style="height: 200px; width: 300px;" src=${element.image} alt="product" />
            </div>
            <div id="text">
              <p>Title: <span id="title">${element.title}</span></p>
              <p>Price: <span id="price">${element.price}</span></p>
              <p>Description: <span id="description">${element.description}</span></p>
              <p>Category: <span id="category">${element.category}</span></p>
            </div>
          </div>`;

        contOut.appendChild(d);
  });
  
}

products();
