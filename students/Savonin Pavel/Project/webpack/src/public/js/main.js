//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
// var userCart = [];
var list

//кнопка скрытия и показа корзины
// document.querySelector('.btn-cart').addEventListener('click', () => {
//     document.querySelector('.cart-block').classList.toggle('invisible');
// });
//кнопки удаления товара (добавляется один раз)
// document.querySelector('.cart-block').addEventListener ('click', (evt) => {
//     if (evt.target.classList.contains ('del-btn')) {
//         removeProduct (evt.target);
//     }
// })
//кнопки покупки товара (добавляется один раз)
// document.querySelector('.products').addEventListener ('click', (evt) => {
//     if (evt.target.classList.contains ('buy-btn')) {
//         addProduct (evt.target);
//     }
// })

//создание массива объектов - имитация загрузки данных с сервера
function fetchData() {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push(createProduct(i));
    }
    return arr
};

//создание товара
function createProduct(i) {
    return {
        id: ids[i],
        name: items[i],
        price: prices[i],
        img: image,
        quantity: 0,
        createTemplate: function () {
            return `<div class="product-item" data-id="${this.id}">
                        <img src="${this.img}" alt="Some img">
                        <div class="desc">
                            <h3>${this.name}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn" 
                            data-id="${this.id}"
                            data-name="${this.name}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                        </div>
                    </div>`
        },

        add: function () {
            this.quantity++
        }
    }
};

//рендер списка товаров (каталога)
function renderProducts() {
    let arr = [];
    for (item of list) {
        arr.push(item.createTemplate())
    }
    document.querySelector('.products').innerHTML = arr.join();
}




function init() {
    console.log('init start')
    list = fetchData();
    renderProducts();
}

init()

//CART

// Добавление продуктов в корзину
// function addProduct (product) {
//     let productId = +product.dataset['id'];
//     let find = userCart.find (element => element.id === productId);
//     if (!find) {
//         userCart.push ({
//             name: product.dataset ['name'],
//             id: productId,
//             img: cartImage,
//             price: +product.dataset['price'],
//             quantity: 1
//         })
//     }  else {
//         find.quantity++
//     }
//     renderCart ()
// }

// //удаление товаров
// function removeProduct (product) {
//     let productId = +product.dataset['id'];
//     let find = userCart.find (element => element.id === productId);
//     if (find.quantity > 1) {
//         find.quantity--;
//     } else {
//         userCart.splice(userCart.indexOf(find), 1);
//         document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
//     }
//     renderCart ();
// }

// //перерендер корзины
// function renderCart () {
//     let allProducts = '';
//     for (el of userCart) {
//         allProducts += `<div class="cart-item" data-id="${el.id}">
//                             <div class="product-bio">
//                                 <img src="${el.img}" alt="Some image">
//                                 <div class="product-desc">
//                                     <p class="product-title">${el.name}</p>
//                                     <p class="product-quantity">Quantity: ${el.quantity}</p>
//                                     <p class="product-single-price">$${el.price} each</p>
//                                 </div>
//                             </div>
//                             <div class="right-block">
//                                 <p class="product-price">${el.quantity * el.price}</p>
//                                 <button class="del-btn" data-id="${el.id}">&times;</button>
//                             </div>
//                         </div>`
//     }

//     document.querySelector(`.cart-block`).innerHTML = allProducts;
// }
class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [{
                title: 'Shirt',
                price: 150
            },
            {
                title: 'Socks',
                price: 50
            },
            {
                title: 'Jacket',
                price: 350
            },
            {
                title: 'Shoes',
                price: 250
            },
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    totalPrice() {
        let total = 0;
        this.goods.forEach(good => {
            total += +good.price
            return total
        })
    }
}

const goods = [{
        title: 'Shirt',
        price: 150
    },
    {
        title: 'Socks',
        price: 50
    },
    {
        title: 'Jacket',
        price: 350
    },
    {
        title: 'Shoes',
        price: 250
    },
]

class Catalog {
    constructor(container) {
        this.items = []
        this.container = container //'#app'
        this._init()
    }

    _init() {
        this.items = goods
        this._render()
    }

    _render() {
        let str = ''
        this.items.forEach(el => {
            str += `<div class="goods-item"><h3>${el.title}</h3><p>${el.price}</p></div>`
        })
        document.querySelector(this.container).innerHTML = str
    }
}

class Cart {
    constructor() {}
    _render()
}