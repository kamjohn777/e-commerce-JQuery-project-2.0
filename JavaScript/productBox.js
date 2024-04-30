const productBoxTitles = [
  { title: "New Arrivals" },
  { title: "Best Sellers" },
  { title: "Trending" },
];

const productMinimalList = document.querySelector(".product-minimal-list");

productBoxTitles.forEach(function (productBoxTitle) {
  const productBox = document.createElement("div");
  productBox.classList.add("product-box-titles");

  let productsHTML1 = '';
  let productsHTML2 = '';
  for (let i = 0; i < 4; i++) {
    productsHTML1 += `
      <div class="showcase">
          <div class="showcase-img-wrap">
          <img src="https://i.pinimg.com/236x/f8/de/ca/f8decaa116143002666cb2817c18cd67.jpg" alt="" class="product-box-img">
          </div>
          <div class="showcase-info-content">
              <p class="product-title">title</p>
              <p class="product-category">Category</p>
              <p class="product-price">$50</p>
          </div>
      </div>
    `;
  }

  for (let i = 0; i < 4; i++) {
    productsHTML2 += `
      <div class="showcase">
          <div class="showcase-img-wrap">
          <img src="https://i.pinimg.com/236x/f8/de/ca/f8decaa116143002666cb2817c18cd67.jpg" alt="" class="product-box-img">
          </div>
          <div class="showcase-info-content">
              <p class="product-title">title</p>
              <p class="product-category">Category</p>
              <p class="product-price">$50</p>
          </div>
      </div>
    `;
  }

  productBox.innerHTML = `
    <div class="product-box-title-flex">
        <p class="product-box-title">${productBoxTitle.title}</p>
    </div>
    <hr class="product-hr">
    <div class="product-showcase">
        <div class="showCase-wrap has-scroll">
            <div class="showcase-container">
                ${productsHTML1}
            </div>
            <div class="showcase-container showcase-contain-2">
                ${productsHTML2}
            </div>
        </div>
    </div>
  `;

  productMinimalList.appendChild(productBox);
});