

let cart = [];
let cartPrice
let cartQuantity

const cartListElement = document.querySelector('.cart-product-list')   
const cartQuantityElement = document.querySelector('.cart-quantity-total')
const cartPriceElement = document.querySelector('.cart-price-total')
const cartNoticeElement = document.querySelector('.header-cart-notice')
const cartTableElement = document.querySelector('.cart-table-body') 
const cartTotalElement = document.querySelector('.cart-total')
const cartCheckOutElement = document.querySelector('.cart-checkout')
const cartOverviewElement = document.querySelector('.cart-overview-text')
const cartEmptyFormElement = document.querySelector('.cart-empty-form')
const cartFormElement = document.querySelector('.cart-form')



const  calculateCartPrice = (cart) =>{
    if (cart.length > 0) {
        return cart.reduce((cartSum, cartItem) => {
               return cartSum += cartItem.quantity * cartItem.originalPrice*(1 - cartItem.discount/100)
           }, 0)
    } else {
        return 0
    }
}



const findIndexIncart = (productId) => {
    return cart.findIndex(
        (cartItem) => Number(cartItem.id) === productId
      )
}

const loadCartInformation = () => {
  const cartInString = localStorage.getItem("cart");
  const cartPriceInString = localStorage.getItem("cartPrice")
  cart = JSON.parse(cartInString) || [];
  cartPrice = JSON.parse(cartPriceInString) || 0
};

loadCartInformation();

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
    renderCartTable()
    saveCartToLocalStorage(cart)
}

const cartQuantityAdd = (id) => {
    const productInCartIndex = findIndexIncart(id);
    if (cart[productInCartIndex].quantity < cart[productInCartIndex].stock ){
        cart[productInCartIndex].quantity += 1
        renderCart()
        renderCartTable()
        saveCartToLocalStorage(cart);
    } else {
        alert('Số lượng bạn chọn đã đạt mức tối đa của sản phẩm này')
    }

}

const cartQuantityMinus = (id) => {
    const productInCartIndex = findIndexIncart(id)
    if (cart[productInCartIndex].quantity > 1){
        cart[productInCartIndex].quantity -= 1
        renderCart()
        renderCartTable()
        saveCartToLocalStorage(cart);
    } else {
        deleteCartItem(id)
    }
}

function CartUIHandle(cart){    
    cartQuantity = cart.reduce((cartCount, cartItem) => {
        return cartCount += cartItem.quantity
     },0)
    cartQuantityElement.innerText = `${cartQuantity} Sản phẩm trong giỏ`
    cartNoticeElement.innerText = `${cartQuantity}`
    cartPriceElement.innerText = `${cartPrice.toLocaleString('en-US')}đ`
    cartTotalElement.innerText = `${cartPrice.toLocaleString('en-US')}đ`
    cartOverviewElement.innerText = `Giỏ hàng: ${cartQuantity} sản phẩm - ${cartPrice.toLocaleString('en-US')}đ`

}



function renderCart(){
    if (cartListElement) {    
        if (cart.length > 0){           
           const htmls = cart.map((cartItem)=> {
            let {id, productName, productType, productDesc, originalPrice, discount, image, quantity } = cartItem
            return `
                <li class="cart-product-item d-flex">
                    <div class="cart-product-img-wrapper">
                        <img src=${image} alt="" class="cart-product-img">
                    </div>
                    <div class="cart-product-detail">
                        <a class="cart-product-name" href="">${productType} ${productName}</a>
                        <p class="cart-product-description m-0">${productDesc}</p>
                        <div class="cart-product-price">
                            Đơn giá: <span>${(originalPrice*(1 - discount/100)).toLocaleString('en-US')}</span>
                        </div>
                        <div class="cart-product-count d-flex mt-1">
                            <span class="product-count-label">Số lượng</span>
                            <div class="cart-product-quantity-wrap d-flex">
                                <button class="quantity-minus-btn" onclick="cartQuantityMinus(${id})">-</button>
                                <span class="product-count-quantity">${quantity}</span>
                                <button class="quantity-add-btn"  onclick="cartQuantityAdd(${id})" >+</button>
                            </div>
                            <span class="cart-product-delete" onclick="deleteCartItem(${id})">Xóa</span>
                        </div>
                    </div>
                </li> `                     
            })            
            cartListElement.innerHTML = htmls.join('') 
            cartEmptyFormElement.classList.remove('active')
            cartFormElement.classList.remove('hide')          
        } else {
            cartQuantity = 0
            cartListElement.innerHTML = `
            <div class="cart-empty">
            <img src="./asset/img/empty-cart-icon.png" alt="" class="cart-empty-img">
            </div> ` 
            cartEmptyFormElement.classList.add('active')
            cartFormElement.classList.add('hide')
        } 
    }
    cartPrice = calculateCartPrice(cart)    
    CartUIHandle(cart)
}



renderCart()

const renderCartTable = () => {
    if (cartTableElement){
        if (cart.length > 0){
            const htmls = cart.map((cartItem)=> {
                let {id, productName, productType, productDesc, originalPrice, discount, image, quantity } = cartItem
                let totalPrice =  originalPrice * (1 - discount/100 ) * quantity
                    return `
                    <tr class="cart-table-row">
                    <td data-label="Sản phẩm">
                        <a href="" class="cart-item-img">
                            <img src=${image} alt="">
                        </a>
                    </td>
                    <td data-label="Mô tả">
                        <a class="cart-product-name mt-0 mb-2" href="">${productType} ${productName}</a>
                        <p class="cart-product-description m-0">${productDesc}</p>
                        <span class="cart-product-remove" onclick="deleteCartItem(${id})">
                            <i class="cart-product-remove fa-solid fa-trash-can mt-2"></i>
                        </span>
                    </td>
                    <td data-label="Đơn giá" class="cart-product-price">${(originalPrice * (1 - discount/100 )).toLocaleString('en-US')}đ</td>
                    <td data-label="Số lượng">
                        <div class="cart-product-quantity-wrap d-flex">
                            <button class="quantity-minus-btn" onclick="cartQuantityMinus(${id})">-</button>
                            <span class="product-count-quantity">${quantity}</span>
                            <button class="quantity-add-btn" onclick="cartQuantityAdd(${id})">+</button>
                        </div>
                    </td>
                    <td data-label="Tổng giá" class="cart-product-price text-end">${totalPrice.toLocaleString('en-US')}đ</td>
                </tr> 
                `                
            })
            cartTableElement.innerHTML = htmls.join('')  
        } else {
            cartTableElement.innerHTML =''
        }
    }
}

renderCartTable()

