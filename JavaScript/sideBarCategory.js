const categories = [
  { title: "Clothes", img: "./Assets/stylish-jacket-svgrepo-com.svg" },
  { title: "Shoes", img: "./Assets/heels-svgrepo-com.svg" },
  { title: "Hats", img: "./Assets/hat-iv-svgrepo-com.svg" },
  { title: "Bags", img: "./Assets/handbag.png" },
  { title: "Watches", img: "./Assets/watch.png" },
  { title: "Perfumes", img: "./Assets/perfume (1).png" },
  { title: "Sunglasses", img: "./Assets/sunglasses-svgrepo-com.svg" },
];

const ul = document.querySelector(".sidebar-category-ul");

categories.forEach(function (category) {
  const li = document.createElement("li");

  li.innerHTML = `
    <div class="menu-title-flex">
        <img src="${category.img}" alt="${category.title}" width="40" height="40" class="menu-title-img">
        <p class="menu-title">${category.title}</p>
    </div>
    <div class="menu-title-img-plus">
        <img src="./Assets/add.png" alt="yellow-plus-sign">
    </div>
`;

  ul.appendChild(li);
});

const bestsellers = [
  {
    title: "baby fabric shoes",
    img: "https://3.imimg.com/data3/OD/QM/MY-3132455/baby-shoes-250x250.jpeg",
  },
  {
    title: "men's hoodies t-shirt",
    img: "https://i.pinimg.com/236x/f8/de/ca/f8decaa116143002666cb2817c18cd67.jpg",
  },
  {
    title: "girls t-shirt",
    img: "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/hookshots/products/1210252/shirt-1573741750-f3ffdac78123bb5920ef443dec5dce83.png?v=3&d=eyJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyMDAuMCwgMTM3MS40Mjg1NzE0Mjg1NzEzXSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs4MjZdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvMDEyNDc2N2UxMDZhNTE5MzA5NDM0NTA3MjAwZGRkOWQvZnJvbnQtMTYyMzM0NjEzNi04ODI4MzMyN2Y4YzhhYjU5NzE4ODA4NGQyZWVjNTdjYy5wbmciXSwgeyJ4IjogNTg0LCAieSI6IDQ1NywgImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV0sICJmb3JjZSI6IGZhbHNlLCAib25seV9tZXRhIjogZmFsc2V9",
  },
  {
    title: "woolen hat for men",
    img: "https://americantall.com/cdn/shop/products/American-Tall-Men-Mens-Cuffed-Beanie-Hat-Light-Grey-Front_1445x.jpg?v=1660672031",
  },
  {
    title: "sweaters for all",
    img: "https://m.media-amazon.com/images/I/B18zCiKmq+S._CLa%7C2140%2C2000%7CA1Ebee3WZLL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png",
  },
];

const bestsellerUl = document.querySelector(".sidebar-best-seller-ul");

bestsellers.forEach(function (bestseller) {
  const bestsellerLi = document.createElement("li");

  bestsellerLi.classList.add("bestseller-li");

  bestsellerLi.innerHTML = `
    <div class="menu-title-flex bestseller-title-flex">
        <img src="${bestseller.img}" alt="${bestseller.title}" width="85" height="85" class="menu-title-img bestseller-img">

        <div class="menu-title-container">
        <p class="menu-title">${bestseller.title}</p>
        <p class="menu-title-stars">Stars</p>
        <p class="menu-title-price">Price: $50</p>
        </div>
    </div>
    `;

  bestsellerUl.appendChild(bestsellerLi);
});
