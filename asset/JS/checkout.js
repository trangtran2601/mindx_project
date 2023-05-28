const cartCheckout = document.querySelector("#cart-checkout");
const totalPriceElement = document.querySelector("#total-price");
const modal = document.querySelector('.checkout-success-modal')

let cart = []
let cartPrice 

const loadCartInformation = () => {
    const cartInString = localStorage.getItem("cart");
    const cartPriceInString = localStorage.getItem("cartPrice")
    cart = JSON.parse(cartInString) || [];
    cartPrice = JSON.parse(cartPriceInString)
  };
  
  loadCartInformation();


const renderCartCheckout = () => {
    if (cartCheckout){
        if (cart.length >0){
            const cartCheckOutItems = cart.map((cartItem) => {
             let {id, productName, productType, productDesc, originalPrice, discount, image, quantity } = cartItem;
                return `
                <tr>
                <th scope="row">
                    <div class="display-product">
                        <div class="checkout-image">
                            <div class="checkout-image-container">
                                <img src="${image}">
                            </div>
                            <div class="quantity">${quantity}</div>
                        </div>
                </th>
                <td>
                    <div class="checkout-product-info">
                        <div class="checkout-name">${productType} ${productName}</div>
                        <div class="checkout-info">${productDesc}</div>
                    </div>
                </td>
                <td>
                    <div class="pricing-display">
                        <div class="current-price">${(quantity*originalPrice*(1 - discount/100)).toLocaleString('en-US')}₫
                        </div>
                    </div>
                </td>
                
            </tr>`;
            })
          
            cartCheckout.innerHTML = cartCheckOutItems.join("");
        } else {
            cartCheckout.innerHTML = "";
        }
        }
    totalPriceElement.innerText = `VNĐ  ${cartPrice.toLocaleString('en-US')}`
  };

  renderCartCheckout();

const clearCart = ()=>{
    cart = []
    localStorage.setItem("cart", JSON.stringify(cart));
    cartPrice = 0
    localStorage.setItem("cartPrice", JSON.stringify(cartPrice));
}

const modalToggle = () =>{
    modal.classList.add('active')
    setTimeout(function(){
        modal.classList.remove('active')
        window.location.href = "index.html"
    }, 5000)
}

modal.addEventListener('click', function (){
    modal.classList.remove('active')
        window.location.href = "index.html"
}
)