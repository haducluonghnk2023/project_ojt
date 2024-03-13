const products = [
    {img: "./asset/images/chuot 1.jpg",name :"chuột không dây",price:"1.600.000"},
    {img: "./asset/images/chuot 1.jpg",name :"chuột không dây",price:"1.700.000"},
    {img: "./asset/images/chuot 1.jpg",name :"chuột không dây",price:"1.800.000"},
    {img: "./asset/images/chuot 1.jpg",name :"chuột không dây",price:"2.000.000"},
    {img: "./asset/images/chuot 1.jpg",name :"chuột không dây",price:"1.200.000"},
    {img: "./asset/images/chuot 1.jpg",name :"chuột không dây",price:"1.300.000"},
    {img: "./asset/images/chuot 1.jpg",name :"chuột không dây",price:"1.400.000"},
    {img: "./asset/images/chuot 1.jpg",name :"chuột không dây",price:"1.500.000"},
]
function renderProduct(container, product) {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
        <img src="${product.img}" alt="">
        <p>${product.name}</p>
        <p>Giá: ${product.price}</p>
    `;
    container.appendChild(div);
}

const main1Container = document.querySelector('.main1');
products.slice(0, 4).forEach(product => {
    renderProduct(main1Container, product);
});

const main2Container = document.querySelector('.main2');
products.slice(4).forEach(product => {
    renderProduct(main2Container, product);
});