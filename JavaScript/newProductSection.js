const newProductContent = [
    {
        img: './Assets/New-Products-images/new_product_1.jpg',
        title: 'New Product 1',
        price: 'Price: $200'
    },
    {
        img: './Assets/New-Products-images/new_product_2.jpg',
        title: 'New Product 2',
        price: 'Price: $300'
    },
    {
        img: './Assets/New-Products-images/new_product_3.jpg',
        title: 'New Product 3',
        price: 'Price: $400'
    },
    {
        img: './Assets/New-Products-images/new_product_4.jpg',
        title: 'New Product 4',
        price: 'Price: $500'
    },
    {
        img: './Assets/New-Products-images/new_product_5.jpg',
        title: 'New Product 5',
        price: 'Price: $600'
    },
    {
        img: './Assets/New-Products-images/new_product_6.jpg',
        title: 'New Product 6',
        price: 'Price: $700'
    },
    {
        img: './Assets/New-Products-images/new_product_1.jpg',
        title: 'New Product 1',
        price: 'Price: $200'
    },
    {
        img: './Assets/New-Products-images/new_product_2.jpg',
        title: 'New Product 2',
        price: 'Price: $300'
    },
    {
        img: './Assets/New-Products-images/new_product_3.jpg',
        title: 'New Product 3',
        price: 'Price: $400'
    },
    {
        img: './Assets/New-Products-images/new_product_1.jpg',
        title: 'New Product 1',
        price: 'Price: $200'
    },
    {
        img: './Assets/diamond-ring.png',
        title: 'New Product 2',
        price: 'Price: $300'
    }
];



const newProductContainer = document.querySelector('.new_product_container');

newProductContent.forEach(function (newProduct) {
    const individualProductBox = document.createElement('div');
    individualProductBox.classList.add('individual-product-box');

    individualProductBox.innerHTML = `
    <div class="new_product_content">
        <div class="new_product_img">
          <img class="new-product-images-js" src="${newProduct.img}" alt="${newProduct.title}">
        </div>
        <div class="new_product_info">
          <h3>${newProduct.title}</h3>
          <p>${newProduct.price}</p>
          <button class="new_product_btn">Buy Now</button>
        </div>
      </div>
    `;

    newProductContainer.appendChild(individualProductBox);
});