// let products = [
//     {image : "./asset/images/chuot 1.jpg",name :"chuột không dây",price :"1200000"},
//     {image : "./asset/images/chuot 1.jpg",name :"chuột không dây",price :"1200000"},
//     {image : "./asset/images/chuot 1.jpg",name :"chuột không dây",price :"1200000"},
//     {image : "./asset/images/chuot 1.jpg",name :"chuột không dây",price :"1200000"},
//     {image : "./asset/images/chuot 1.jpg",name :"chuột không dây",price :"1200000"},
//     {image : "./asset/images/chuot 1.jpg",name :"chuột không dây",price :"1200000"},
//     {image : "./asset/images/chuot 1.jpg",name :"chuột không dây",price :"1200000"},
//     {image : "./asset/images/chuot 1.jpg",name :"chuột không dây",price :"1200000"},
// ]
// localStorage.setItem("products", JSON.stringify(products));
let products = JSON.parse(localStorage.getItem("products"));

// Hàm render sản phẩm
function renderProduct() {
    let element = "";
    let element2 = "";
    for (let i = 0; i < products.length / 2; i++) {
        element +=
            `
        <div class="products__item">
            <div>
                <img src="${products[i].image}" alt="">
            </div>
            <p>${products[i].name}</p>
            <div>
                <p>Giá : ${products[i].price}</p>
                <button onclick ="addToCart(${products[i].id})">mua</button>
            </div>
        </div>
        `;
    }
    for (let i = products.length / 2; i < products.length; i++) {
        element2 +=
            `
        <div class="products__item">
            <div>
                <img src="${products[i].image}" alt="">
            </div>
            <p>${products[i].name}</p>
            <div>
                <p>Giá : ${products[i].price}</p>
                <button onclick ="addToCart(${products[i].id})">mua</button>
            </div>
        </div>
        `;
    }
    document.getElementById("product").innerHTML = element;
    document.getElementById("product2").innerHTML = element2;
}

renderProduct();

// Hàm thêm sản phẩm vào giỏ hàng

function addToCart(productId){
    let checkLogin = JSON.parse(localStorage.getItem("checklogin"));
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
        cart = [];
    }
    let product = {
        id: Math.floor(Math.random() * 100000),
        name: products[0].name,
        price: products[0].price,
        image: products[0].image,
    }
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        if(users[i].userId == checkLogin){
            console.log(users[i].cart);
            // lấy thông tin sản phẩm để đưa vào giỏ hàng
            let product = JSON.parse(localStorage.getItem("products"));
            for (let i = 0; i < product.length; i++) {
                if(product[i].id === productId){
                    // lấy thông tin sản phẩm
                    console.log("1111111111111111",product[i]);
                    users[i].cart.push(product[i]);
                    // sau khi push xong thì luuw tren local
                    localStorage.setItem("users", JSON.stringify(users));
                    break;
                }
            }
            break
        }
    }
}
