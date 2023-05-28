const productDeal = [
    {
        id: 1,
        name: 'phòng ngủ',
        style: 'poet concept',
        description: 'hiện đại, tinh tế, trẻ trung',
        originalPrice: '14,000,000',
        discountPrice: '12,000,000',
        image: '//product.hstatic.net/200000044142/product/concept-phong-ngu-poet-05_5b3773be4b8743aba5938f5b49730e55_grande.jpg'
    },
    {
        id: 2,
        name: 'phòng ngủ',
        style: 'naga concept natural',
        description: 'Tinh gọn, ấm áp, gần gũi',
        originalPrice: '15,000,000',
        discountPrice: '13,000,000',
        image: '//product.hstatic.net/200000044142/product/concept-phong-ngu-naga-01_a224204ad0dd4ff0ba31ac198668a0d5_grande.jpg'
    },
    {
        id: 3,
        name: 'phòng ngủ',
        style: 'sun concept',
        description: 'tối giản, mộc mạc, gần gũi',
        originalPrice: '17,000,000',
        discountPrice: '12,000,000',
        image: '//product.hstatic.net/200000044142/product/concept-phong-ngu-sun-04_d0f33e44c2874b14ad1a82d747d19071_grande.jpg'
    },
    {
        id: 4,
        name: 'phòng khách',
        style: 'bumbee concept pink',
        description: 'Tối giản, hiện đại, công năng',
        originalPrice: '16,000,000',
        discountPrice: '15,000,000',
        image: '//product.hstatic.net/200000044142/product/concept-phong-ngu-sun-04_d0f33e44c2874b14ad1a82d747d19071_grande.jpg'
    },
    {
        id: 5,
        name: 'phòng khách',
        style: 'bumbee concept grey',
        description: 'Tinh gọn, ấm áp, gần gũi',
        originalPrice: '20,000,000',
        discountPrice: '18,000,000',
        image: '//product.hstatic.net/200000044142/product/concept-phong-ngu-sun-04_d0f33e44c2874b14ad1a82d747d19071_grande.jpg'
    },  
    {
        id: 6,
        name: 'phòng bếp',
        style: 'mody concept',
        description: 'góc bếp ấm áp, lưu trữ đa năng',
        originalPrice: '19,000,000',
        discountPrice: '17,000,000',
        image: '//product.hstatic.net/200000044142/product/concept-phong-bep-mody-03_cede0642a0314b2a9a5e5ab15f2abefe_grande.jpg'
    }, 
     {
        id: 7,
        name: 'phòng ngủ',
        style: 'poet concept',
        description: 'Tinh gọn, ấm áp, gần gũi',
        originalPrice: '21,000,000',
        discountPrice: '18,000,000',
        image: '//product.hstatic.net/200000044142/product/concept-phong-bep-mody-03_cede0642a0314b2a9a5e5ab15f2abefe_grande.jpg'
    }
  
]



function renderProductDeal(){
const productDealElement = document.querySelector('.product-deal-list .row')
    if (productDealElement) {
        const htmls = productDeal.map((dealItem)=> {
            let {id, name, style, description, originalPrice, discountPrice,  image } = dealItem
                return `
                <a class="deal-item my-carousel-item col-12 col-md-6 col-xl-3 card-container" href="">
                    <div class="deal-item-img" style="background-image: url(${image});"></div>
                    <div class="deal-item-info">
                        <h3 class="deal-item-name">${name}</h3>
                        <h2 class="deal-item-style mb-0">${style}</h2>
                        <p class="deal-item-desc mb-0">${description}</p>
                        <div class="deal-item-price d-flex">
                            <span class="deal-item-price-discount">${discountPrice}đ</span>
                            <span class="deal-item-price-original">${originalPrice}đ</span>
                        </div>
                    </div>
                </a>
            `
        })
        productDealElement.innerHTML = htmls.join('')
    }
}

renderProductDeal()

const blogList = [
    {
        id: 1,
        description: 'Tưng Bừng Mừng Sinh Nhật Nội Thất BEYOURs 3 Tuổi',
        image: '//file.hstatic.net/200000044142/article/kiz04995_0953622281a04bf493bc60b2b74317e3_grande.jpg'
    }, 
    {
        id: 2,
        description: 'Tham Gia Kết Nối Kinh Doanh & Gia Tăng Cơ Hội Hợp Tác Tại Sự Kiện Business Matching Day',
        image: '//file.hstatic.net/200000044142/article/business_matching_day_9b4a1d23e725484a8378c41d7b7cc8a7_grande.jpg'
    },     
    {
        id: 3,
        description: '"Để Không Ai Bị Bỏ Lại" - Chương Trình NOA Kỳ 01 Đã Diễn Ra Như Thế Nào?',
        image: '//file.hstatic.net/200000044142/article/noa1_0fe28cf38183448e97e7dcc67ffaa172_grande.jpg'
    },  
    {
        id: 4,
        description: 'Khai Trương Showroom Nội Thất BEYOURs Tại Quận 7 TP.HCM',
        image: '//file.hstatic.net/200000044142/article/2_d8407110fc5849289b7a478cb3e37be4_grande_23ac789a2eb2472f99a7c6f7537727bf_grande.png'
    },  
    {
        id: 5,
        description: 'Được Và Mất Gì Khi Tham Gia Buổi Đào Tạo Alignment Training Day?',
        image: '//file.hstatic.net/200000044142/article/daotao1_86bbfbf90deb41e8bb1d12ffee52c608_grande.jpg'
    },
    {
        id: 6,
        description: 'Tưng Bừng Mừng Sinh Nhật Nội Thất BEYOURs 3 Tuổi',
        image: '//file.hstatic.net/200000044142/article/business_matching_day_9b4a1d23e725484a8378c41d7b7cc8a7_grande.jpg'
    }
]
    


function renderBlog(){
    const blogElement = document.querySelector('.blog-list .row')    
    if (blogElement) {    
        const htmls = blogList.map((blogItem)=> {
            let {id, description, image } = blogItem
                return `
                <a href="" class="blog-item my-carousel-item col-12 col-md-6 col-xl-4">
                    <div class="blog-item-img" style="background-image: url(${image});"></div>
                        <div class="blog-item-desc">
                            <h5>${description}</h5>
                        </div>
                </a>               `
        })
        blogElement.innerHTML = htmls.join('')
    
    }
}

renderBlog()


const policyList = [
    {
        id: 1,
        name: 'miễn phí giao hàng',
        description: 'Áp dụng cho đơn hàng từ 1.000.000đ' ,
        icon: '//theme.hstatic.net/200000044142/1000773248/14/policy_icon_1.png?v=12022'
    }, 
    {
        id: 2,
        name: 'chất lượng đảm bảo',
        description: 'Bảo hành đển 730 ngày' ,
        icon: '//theme.hstatic.net/200000044142/1000773248/14/policy_icon_1.png?v=12022'
    },     
    {
        id: 3,
        name: 'đổi trả dễ dàng',
        description: 'Miễn phí đổi trả trong vòng 7 ngày' ,
        icon: '//theme.hstatic.net/200000044142/1000773248/14/policy_icon_1.png?v=12022'
    },  
]


function renderPolicy(){
    const policyElement = document.querySelector('.policy-list .row')    
    if (policyElement) {    
        const htmls = policyList.map((policyItem)=> {
            let {id, name, description, icon } = policyItem
                return `
                <a href="" class="policy-item col-4 col-md-4 d-flex">
                        <div class="policy-icon d-flex">
                            <img src="${icon}" alt="">
                        </div>
                        <div class="policy-info d-flex">
                            <h5 class="policy-name">${name}</h5>
                            <p class="policy-detail mb-0">${description}</p>
                         </div>
                </a>           `
        })
        policyElement.innerHTML = htmls.join('')
    
    }
}

renderPolicy()


const featuredProducts = [
    {   
        id: 1,
        productName: "MAKEUP MIRROR ART BEMM2302-RA",
        productType: "[MUA 1 TẶNG 1] Gương Trang Điểm",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-mirror.jpg",
        imageAfter: "./asset/img/hover-mirror.jpg",
        discount: 0,
        originalPrice: 19890000,
        stock: 10
    },
    {
        id: 2,
        productName: "GUYON 02",
        productType: "Tủ Giày",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-shoescabinet.jpg",
        imageAfter: "./asset/img/hover-cabinet.jpg",
        discount: 0,
        originalPrice: 3290000,
        stock: 10
   },
    {
        id: 3,
        productName: "INDIANA",
        productType: "Sofa Bed",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-sofabed.jpg",
        imageAfter: "./asset/img/hover-sofa.jpg",
        discount: 5,
        originalPrice: 19890000,
        stock: 10   
     },
    {
        id: 4,
        productName: "DOUBLE HANGER SIZE L NATURAL",
        productType: "Giá Treo Quần Áo",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-doublehanger.jpg",
        imageAfter: "./asset/img/hover-doublehanger.jpg",
        discount: 41,
        originalPrice: 1690000,
        stock: 10  
   },
    {
        id: 5,
        productName: "POET BED NATURAL",
        productType: "Giường Ngủ",
        productDesc: 'NATURAL WHITE',
        image: "https://product.hstatic.net/200000044142/product/giuong-ngu-frida-02_8d966bfeb16648d2a42e092218a1f11a_medium.jpg",
        imageAfter: "./asset/img/hover-poetbed.jpg",
        discount: 0,
        originalPrice: 9090000,
        stock: 10   
    },
    {
        id: 6,
        productName: "COMBO 3 TỦ QUẦN ÁO MANDY NATURAL",
        productType: "Tủ Quần Áo",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-wardrobe.jpg",
        imageAfter: "./asset/img/hover-wardrobe.jpg",
        discount: 5,
        originalPrice: 15870000,
        stock: 10 
   },    
    {
        id: 7,
        productName: "VIENNA",
        productType: "Sofa băng",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-vienna.jpg",
        imageAfter: "./asset/img/hover-vienna.jpg",
        discount: 5,
        originalPrice: 17390000,
        stock: 10    
    },
    {
        id: 8,
        productName: "Morel",
        productType: "Sofa Góc",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-sofa.jpg",
        imageAfter: "./asset/img/hover-sofa.jpg",
        discount: 10,
        originalPrice: 27990000,
        stock: 10    
    },
    {
        id: 9,
        productName: "AME TIVI SHELF",
        productType: "Kệ Tivi",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-ametvshelf.jpg",
        imageAfter: "./asset/img/hover-ametvshelf.jpg",
        discount: 0,
        originalPrice: 5390000,
        stock: 10        
   },
    {
        id: 10,
        productName: "MITHRIL COFFEE TABLE",
        productType: "Bàn Trà - Bàn Sofa",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-mithrel.jpg",
        imageAfter: "./asset/img/hover-mithrel.jpg",
        discount: 0,
        originalPrice: 7619000, 
        stock: 10
    },
    {   
        id: 11,
        productName: "FRANE COFFEE TABLE",
        productType: "Bàn Trà - Bàn Sofa",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-coffeetable.jpg",
        imageAfter: "./asset/img/hover-caracoffeetable.jpg",
        discount: 0,
        originalPrice: 4229000,
        stock: 10
    },
    {
        id: 12,
        productName: "Bee Table White",
        productType: "Bàn Trà - Bàn Sofa",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-beetable.jpg",
        imageAfter: "./asset/img/hover-beetable.jpg",
        discount: 41,
        originalPrice: 459000,   
        stock: 10
    },
    {
        id: 13,
        productName: "Chara Coffee Table",
        productType: "Bàn Trà - Bàn Sofa",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-caracoffeetable.jpg",
        imageAfter: "./asset/img/hover-caracoffeetable.jpg",
        discount: 0,
        originalPrice: 5450000,
        stock: 10
    },
    {
        id: 14,
        productName: "A Case Pink",
        productType: "Kệ đa năng",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-pinkcases.jpg",
        imageAfter: "./asset/img/hover-pinkcases.jpg",
        discount: 49,
        originalPrice: 389000, 
        stock: 10
    },
    {
        id: 15,
        productName: "NARI DINNER TABLE SIZE S BROWN",
        productType: "Bộ bàn ăn",
        productDesc: 'NATURAL WHITE',
        image: "./asset/img/carousel-nari.jpg",
        imageAfter: "./asset/img/hover-nari.jpg",
        discount: 6,
        originalPrice: 6040000,
        stock: 10
    },
]

function renderFeaturedProducts(){
    const featuredProductsElement = document.querySelector('.productsCard')    
    if (featuredProductsElement) {    
        const htmls = featuredProducts.map((featuredProductItem)=> {
            let {id, productName, productType,originalPrice, discount, image, imageAfter} = featuredProductItem
                return `
                <div class="feature-product-item box-01 col">
                        <div class="img-container">
                            <img class="img-before" src=${image} alt="">
                            <img class="img-after" src=${imageAfter} alt="">
                            <span class="discount ${discount !== 0 ? 'active' : ""}">-${discount}%</span>
                        </div>
                        <div class="products">
                            <div class="product-info">
                                <a href="" class="product-name">${productName}</a>
                                <p class="product-type">${productType}</p>
                                <div class="price">
                                    <span class="old-price ${discount !== 0 ? 'active' : ""}">${originalPrice.toLocaleString('en-US')}₫</span>
                                    <span class="current-price">${(originalPrice*(1 - discount/100)).toLocaleString('en-US')}₫</span>
                                </div>
                            </div>
                         
                            <button class="home-btn" onclick="onAddProductToCart(${id})">Mua ngay</button>
                        </div>
                </div>`
        })
        featuredProductsElement.innerHTML = htmls.join('')
    
    }
}

renderFeaturedProducts()


const initFlashSaleProduct = () => {
    const FlashSaleProductsElement = document.querySelector(".flashsale-product-list .row");
    if (FlashSaleProductsElement) {
        const processingProductsCard = featuredProducts.map((FlashSaleProduct) => {
            let {id, productName, productType,originalPrice, discount, image, imageAfter} = FlashSaleProduct;
            if (discount !== 0) {
                return `<div class="my-carousel-item box-01 col">
                <div class="img-container">
                    <img class="img-before" src=${image} alt="">
                    <img class="img-after" src=${imageAfter} alt="">
                    <span class="discount ${discount !== 0 ? 'active' : ""}">-${discount}%</span>
                </div>
                <div class="products">
                    <div class="product-info">
                        <a href="" class="product-name">${productName}</a>
                        <p class="product-type">${productType}</p>
                        <div class="price">
                            <span class="old-price ${discount !== 0 ? 'active' : ""}">${originalPrice.toLocaleString('en-US')}₫</span>
                            <span class="current-price">${(originalPrice*(1 - discount/100)).toLocaleString('en-US')}₫</span>
                        </div>
                    </div>
                 
                    <button class="home-btn" onclick="onAddProductToCart(${id})">Mua ngay</button>
                </div>
        </div>`}
        })

        FlashSaleProductsElement.innerHTML = processingProductsCard.join("");
    }
   
}


initFlashSaleProduct();




// Hover Effect: Function để thay đổi ảnh khi hover

const box = document.querySelectorAll(".box-01")
const img = document.querySelectorAll(".img-after")


for (let i = 0; i < box.length; i++) {
    box[i].onmouseover = function () {
        img[i].classList.add("active");
    }
}

for (let i = 0; i < box.length; i++) {
    box[i].onmouseout = function () {
        img[i].classList.remove("active");
    }
}


// -------------------------------------------
let cart = [];

const loadCartInformation = () => {
    const cartInString = localStorage.getItem("cart");
    cart = JSON.parse(cartInString) || [];
  };
  loadCartInformation();

const findIndexIncart = (productId) => {
    return cart.findIndex(
        (cartItem) => Number(cartItem.id) === productId
      )
}


const  calculateCartPrice = (cart) =>{
    if (cart.length > 0) {
        return cart.reduce((cartSum, cartItem) => {
               return cartSum += cartItem.quantity * cartItem.originalPrice*(1 - cartItem.discount/100)
           }, 0)
    } else {
        return 0
    }
}

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    cartPrice = calculateCartPrice(cart)
  localStorage.setItem("cartPrice", JSON.stringify(cartPrice));
  };

const onAddProductToCart = (id)=> {
  const selectedProduct = featuredProducts.find((featuredProduct) => Number(featuredProduct.id) === id);
  const productInCartIndex = findIndexIncart(id);
    if (productInCartIndex !== -1) {
        cart[productInCartIndex].quantity += 1;
    } else {
        selectedProduct.quantity = 1;
        cart.push(selectedProduct);
    }
    renderCart()
  saveCartToLocalStorage(cart);
}


const deleteCartItem = (id) => {
    const productInCartIndex = findIndexIncart(id);
    cart.splice(productInCartIndex, 1)
    renderCart()
    saveCartToLocalStorage(cart)
}

const cartQuantityAdd = (id, event) => { 
    const productInCartIndex = findIndexIncart(id);
    if (cart[productInCartIndex].quantity < cart[productInCartIndex].stock ){
        cart[productInCartIndex].quantity += 1
        renderCart()
        saveCartToLocalStorage(cart);
    } else {
        alert('Số lượng bạn chọn đã đạt mức tối đa của sản phẩm này')
    }

}

const cartQuantityMinus = (id, event) => {
    const productInCartIndex = findIndexIncart(id)
    if (cart[productInCartIndex].quantity > 1){
        cart[productInCartIndex].quantity -= 1
        renderCart()
        saveCartToLocalStorage(cart);
    } else {
        deleteCartItem(id)
    }
}


  


function renderCart(){
    const cartListElement = document.querySelector('.cart-product-list')   
    const cartQuantityElement = document.querySelector('.cart-quantity-total')
    const cartPriceElement = document.querySelector('.cart-price-total')
    const cartNoticeElement = document.querySelector('.header-cart-notice')
    let cartQuantity
    let cartPrice
    if (cartListElement) {    
        if (cart.length > 0){
            cartQuantity = cart.reduce((cartCount, cartItem) => {
               return cartCount += cartItem.quantity
            },0)
            cartPrice = cart.reduce((cartSum, cartItem) => {
                return cartSum += cartItem.quantity * cartItem.originalPrice*(1 - cartItem.discount/100)
            },0)
           const htmls = cart.map((cartItem)=> {
                let {id, productName, productType, productDesc, originalPrice, discount,image, quantity } = cartItem
                    return `
                <li class="cart-product-item d-flex">
                    <div class="cart-product-img-wrapper">
                        <img src=${image} alt="" class="cart-product-img">
                    </div>
                    <div class="cart-product-detail">
                        <a class="cart-product-name" href="">${productType} ${productName}</a>
                        <p class="cart-product-description m-0">${productDesc}</p>
                        <div class="cart-product-price">
                            Đơn giá: <span>${(originalPrice*(1 - discount/100)).toLocaleString('en-US')}đ</span>
                        </div>
                        <div class="cart-product-count d-flex mt-1">
                            <span class="product-count-label">Số lượng</span>
                            <div class="cart-product-quantity-wrap d-flex">
                                <button class="quantity-minus-btn" onclick="cartQuantityMinus(${id},event)">-</button>
                                <span class="product-count-quantity">${quantity}</span>
                                <button class="quantity-add-btn"  onclick="cartQuantityAdd(${id}, event)" >+</button>
                            </div>
                            <span class="cart-product-delete" onclick="deleteCartItem(${id})">Xóa</span>
                        </div>
                    </div>
                </li> `                
            })
            cartQuantityElement.innerText = `${cartQuantity} Sản phẩm trong giỏ`
            cartNoticeElement.innerText = `${cartQuantity}`
            cartPriceElement.innerText = `${cartPrice.toLocaleString('en-US')}đ`
            cartListElement.innerHTML = htmls.join('')
        } else {
            cartQuantityElement.innerText = `0 Sản phẩm trong giỏ`
            cartListElement.innerHTML = `<div class="cart-empty">
            <img src="./asset/img/empty-cart-icon.png" alt="" class="cart-empty-img">
        </div> ` 
            cartPriceElement.innerText = '0đ'
            cartNoticeElement.innerText = '0'
        }
    }
}

renderCart()

const categoryList = [
    {
        id: 1,
        name: 'Phòng khách',
        image: '//theme.hstatic.net/200000044142/1000773248/14/collection2_1.png?v=12022',
    },
    {
        id: 2,
        name: 'Phòng ngủ',
        image: '//theme.hstatic.net/200000044142/1000773248/14/collection2_2.png?v=12022'

    },
    {
        id: 3,
        name: 'Phòng bếp',
        image: '//theme.hstatic.net/200000044142/1000773248/14/collection2_3.png?v=12022'

    },
    {
        id: 4,
        name: 'Hành lang',
        image: '//theme.hstatic.net/200000044142/1000773248/14/collection2_4.png?v=12022'
    },
    {
        id: 5,
        name: 'Phòng làm việc',
        image: '//theme.hstatic.net/200000044142/1000773248/14/collection2_5.png?v=12022'
    },
    {
        id: 6,
        name: 'Trang trí nhà cửa',
        image: '//theme.hstatic.net/200000044142/1000773248/14/collection2_6.png?v=12022'
    }
]


