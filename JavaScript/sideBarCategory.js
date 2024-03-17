const categories = [
    { title: 'Clothes', img: './Assets/stylish-jacket-svgrepo-com.svg' },
    { title: 'Shoes', img: './Assets/heels-svgrepo-com.svg' },
    { title: 'Hats', img: './Assets/hat-iv-svgrepo-com.svg' },
    { title: 'Bags', img: './Assets/handbag.png' },
    { title: 'Watches', img: './Assets/watch.png' },
    { title: 'Perfumes', img: './Assets/perfume (1).png' },
    {title: 'Sunglasses', img: './Assets/sunglasses-svgrepo-com.svg'},
];

const ul = document.querySelector('.sidebar-category-ul');

categories.forEach(function (category) {
    const li = document.createElement('li');

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
    { title: 'Baby-shoes', img: './Assets/stylish-jacket-svgrepo-com.svg' },
    { title: 'sdadas', img: './Assets/heels-svgrepo-com.svg' },
    { title: 'dasdas', img: './Assets/hat-iv-svgrepo-com.svg' },
    { title: 'Bdasdasdas', img: './Assets/handbag.png' },
    { title: 'Watchedasdasdass', img: './Assets/watch.png' },
    { title: 'Perdasdasdasfumes', img: './Assets/perfume (1).png' },
    {title: 'Sungsdasdsadlasses', img: './Assets/sunglasses-svgrepo-com.svg'},
]

const bestsellerUl = document.querySelector('.sidebar-best-seller-ul');

bestsellers.forEach(function (bestseller) {
    const bestsellerLi = document.createElement('li');

    bestsellerLi.innerHTML = `
    <div class="menu-title-flex">
        <img src="${bestseller.img}" alt="${bestseller.title}" width="40" height="40" class="menu-title-img">
        <p class="menu-title">${bestseller.title}</p>
    </div>
    <div class="menu-title-img-plus">
        <img src="./Assets/add.png" alt="yellow-plus-sign">
    </div>
    `;

    bestsellerUl.appendChild(bestsellerLi);
});