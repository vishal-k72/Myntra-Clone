// Data form API
const items = [
    {
        id: '001',
        item_image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26701534/2023/12/28/5c37ded7-0c7b-43b0-8517-bcb1a5dcbbbb1703754172636SolidActiveT-shirt4.jpg',
        rating: {
            stars: 4.5,
            noOfReviews: 11114,
        },
        company_name: 'CULT',
        item_name: 'Move All Day Fly Dry T-Shirt',
        price: {
            // current_price: 606,
            // original_price: 1199,
            // discount_price: 42,
            current_price: 1000,
            original_price: 1199,
            discount_price: 42,
        }
    },
    {
        id: '002',
        item_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/MAY/27/xIJiEhDI_2caae465c77c483ea60c3b06d5271471.jpg',
        rating: {
            stars: 4.8,
            noOfReviews: 2100000,
        },
        company_name: 'SMOKEHEAD',
        item_name: 'Men Printed T-Shirt',
        price: {
            current_price: 557,
            original_price: 1799,
            discount_price: 69,
        }
    },
    {
        id: '003',
        item_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027422/2022/9/15/7a4e30f1-809f-4111-9991-6fd07d8832e21663221355704LevisMenCharcoalGreySolidRoundNeckLoungeT-shirts1.jpg',
        rating: {
            stars: 4.4,
            noOfReviews: 1252000,
        },
        company_name: 'Levis',
        item_name: 'Solid Lounge T-Shirt',
        price: {
            current_price: 382,
            original_price: 649,
            discount_price: 41,
        }
    },
    {
        id: '004',
        item_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/APRIL/11/Bulg3KM1_2c2773d06c5c4906a083c81a385050ba.jpg',
        rating: {
            stars: 3.5,
            noOfReviews: 12411111,
        },
        company_name: 'HUSK',
        item_name: 'Men Style T-Shirt',
        price: {
            current_price: 316,
            original_price: 1499,
            discount_price: 79,
        }
    },
    {
        id: '005',
        item_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/AUGUST/26/CMWhNDyl_c613aebdb5424aed8847098f3832a30d.jpg',
        rating: {
            stars: 4.2,
            noOfReviews: 1850,
        },
        company_name: 'HRX by Hrithik Roshan',
        item_name: 'Men Teal Blue Printed T-shirt',
        price: {
            current_price: 449,
            original_price: 999,
            discount_price: 55,
        }
    },
    {
        id: '006',
        item_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/MARCH/23/yBgZ806s_095c44aa6f344380b0e75635a0eae06f.jpg',
        rating: {
            stars: 4.3,
            noOfReviews: 1200,
        },
        company_name: 'Puma',
        item_name: 'Men Graphic Motorsport T-shirt',
        price: {
            current_price: 899,
            original_price: 1999,
            discount_price: 55,
        }
    },
    {
        id: '007',
        item_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/26043098/2024/3/26/f6624456-0882-43eb-982d-f8e6a2f0151d1711431529446-Roadster-Men-Tshirts-7111711431529113-1.jpg',
        rating: {
            stars: 4.0,
            noOfReviews: 3400,
        },
        company_name: 'Roadster',
        item_name: 'Men Cotton Pure Crew Neck T-shirt',
        price: {
            current_price: 349,
            original_price: 699,
            discount_price: 50,
        }
    },
    {
        id: '008',
        item_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/MAY/9/sgjuFsBS_f2e31aa3c32e44d585b3fbc7bcdfcb4b.jpg',
        rating: {
            stars: 4.6,
            noOfReviews: 1520,
        },
        company_name: 'WRONG',
        item_name: 'Men Typography Slim Fit T-shirt',
        price: {
            current_price: 649,
            original_price: 1299,
            discount_price: 50,
        }
    },
    {
        id: '009',
        item_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/APRIL/24/EPcXNfUB_c6ba5a6bb656428bb1f027aac53ce22e.jpg',
        rating: {
            stars: 4.1,
            noOfReviews: 1980,
        },
        company_name: 'Friskers',
        item_name: 'Men Colorblocked Regular T-shirt',
        price: {
            current_price: 419,
            original_price: 1399,
            discount_price: 70,
        }
    },
    {
        id: '010',
        item_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/31/Rklz7skF_810e52613da245f0b1de513454eccf78.jpg',
        rating: {
            stars: 4.4,
            noOfReviews: 3650,
        },
        company_name: 'Tommy Hilfiger',
        item_name: 'Men Brand Logo Embroidered T-shirt',
        price: {
            current_price: 1499,
            original_price: 2499,
            discount_price: 40,
        }
    },
    {
        id: '011',
        item_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/MAY/26/l3cupACc_e5bc8e877e794a99a03d797f2be02cd4.jpg',
        rating: {
            stars: 4.3,
            noOfReviews: 2740,
        },
        company_name: 'HIGHLANDER',
        item_name: 'Men Slim Fit Printed Round Neck T-shirt',
        price: {
            current_price: 399,
            original_price: 999,
            discount_price: 60,
        }
    },
    {
        id: '012',
        item_image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2026/MAY/26/bmPr3jNG_22ee2d8b8f03484bb589428bb919ef37.jpg',
        rating: {
            stars: 4.5,
            noOfReviews: 2120,
        },
        company_name: 'Mast & Harbour',
        item_name: 'Men Casual Striped Crew Neck T-shirt',
        price: {
            current_price: 479,
            original_price: 1199,
            discount_price: 60,
        }
    },
];


// display bag items
let bagCount = document.querySelector(".bag-item-count");


// decider to using k m b

function fun(num){
    if (num >= 1000000000) {
        return Math.floor(num / 100000000) / 10 + 'b';
    }
    if (num >= 1000000) {
        return Math.floor(num / 100000) / 10 + 'm';
    }
    if (num >= 1000) {
        return Math.floor(num / 100) / 10 + 'k';
    }
    return num;
}


// generation code

let displayItemsOnHomePage = () => {
    let itemsContainerElement = document.querySelector('.items-container');
    // let innerHTML = '';
    items.forEach(item => {
        let itemReview = fun(item.rating.noOfReviews);

        itemsContainerElement.innerHTML += `<div class="item-container">
        <img class="item-image" src="${item.item_image}" alt="Item_image">
        <div class="rating">${item.rating.stars} <span>&#9733;</span>| ${itemReview}</div>
                    <div class="compney-name">${item.company_name}</div>

                    <div class="item-name">${item.item_name}</div>

                    <div class="price">
                        <span class="current-price">Rs. ${item.price.current_price}</span>
                        <span class="originol-price">Rs ${item.price.original_price}</span>
                        <span class="discount">(${item.price.discount_price}% OFF)</span>
                    </div>

                    <div class="buttons">
                    <div class="btn-add-bag" onclick="addToBag(${item.id});">Add to Bag</div>

                    <div class="btn-remove-bag" onclick="removeFromBag(${item.id});"><i class="fa-solid fa-delete-left"></i></div>
                    </div>

                </div>`;
    });
    
}

// displayItemsOnHomePage();


// ------------------------------------------------------------

// function qgetObjectsByIds(arr, targetList) {
//     return targetList.filter(item => arr.includes(item.id));
// }

// ------------------------------------------------------------------------------------------------

function getObjectsByIds(arr, targetList) {
    // arr ke saare ids ko string aur padded ('001') format me badal do
    const formattedIds = arr.map(id => String(id).padStart(3, '0'));
    
    // Ab simple filter aur includes kaam karega
    return targetList.filter(item => formattedIds.includes(String(item.id)));
}



let bagItems = [];

let bagItemsObj = [];

function addToBag(id) {
    if (!bagItems.includes(id)) {
        bagItems.push(id);
    }
    console.log("Add in Bag Count :", bagItems);
    if(bagItems.length > 0){
        bagCount.style.visibility = 'visible';
        bagCount.innerHTML = bagItems.length;
    }
    console.log(getObjectsByIds(bagItems, items));
    bagItemsObj = getObjectsByIds(bagItems, items);
    localStorage.setItem("BagItem", JSON.stringify(bagItems));
}

function removeFromBag(id) {
    bagItems = bagItems.filter(itemId => itemId !== id);
    console.log("Remove Form Bag :", bagItems);
    bagCount.innerHTML = bagItems.length;
    if(bagItems == 0){
        bagCount.style.visibility = 'hidden';
    }
    console.log(getObjectsByIds(bagItems, items));
    bagItemsObj = getObjectsByIds(bagItems, items);
    localStorage.setItem("BagItem", JSON.stringify(bagItems));
}





let payEle = document.querySelector('.payble-price');

let cartContainer = document.querySelector('.cart-items');


let totalPrice;
let discountPrice;
let gstPrice;
let finalPay;


const printCartItems = () => {         // 00000000
    cartContainer.innerHTML = '';
    
    bagItemsObj.forEach(item => {
    // let innerrHtml  = '';
    cartContainer.innerHTML += `

                <div class="cart-item">
                <div class="cart-product-image">
                        <img src="${item.item_image}" alt="">
                        </div>
                    <div class="cart-product-details">
                    <div class="product-compney">
                    <div>
                    ${item.company_name}
                    </div>
                    <div id="cut-bun" onclick="removeFromBag(${item.id}); calculatePrice();  printCartItems();"><i class=" cut-btn fa-regular fa-circle-xmark"></i></div>
                    </div>
                    <div class="product-name">
                    ${item.item_name}
                        </div>


                        <div class="price">
                        <span class="current-price">Rs. ${item.price.current_price}</span>
                        <span class="originol-price">Rs ${item.price.original_price}</span>
                        <span class="discount">(${item.price.discount_price}% OFF)</span>
                        </div>
                        
                        
                        <div class="product-return-day">
                            <span id="days">14 Days</span>
                            Return avaible
                            </div>
                            <div class="product-deleviry-date">
                            Delivered by
                            <span class="date">10 Oct 2026</span>
                            </div>
                            </div>
                            </div>
                            `
                            
                            
                        });
}


displayItemsOnHomePage();

let priceBox = document.querySelector('.cart-total-price');


function countPrice(){
    bagItemsObj.forEach(item => {
        totalPrice += item.price.current_price;
        discountPrice += item.price.current_price * 25 / 100;
        gstPrice += item.price.current_price/10;
        finalPay += totalPrice - discountPrice + Math.floor(gstPrice);
    });
    if(totalPrice == 0){
        priceBox.innerHTML = `<h1 style="text-align: center; color: red;">Your Bag is Empty</h1>`;
    }
}
console.log("Total Price : ", totalPrice);


function calculatePrice(){
    totalPrice =  0;
    discountPrice = 0;
    gstPrice = 0;
    finalPay = 0;
    countPrice();
    priceBox.innerHTML = `
    <div class="product-products-count">
        PRICE DETAILS (${bagItemsObj.length} items)
    </div>

    <h1>    </h1>
    <div class="price-box">
        <div id="mrp">
            <span class="mrp">Total MRP</span>
            <span class="mrp-rate">Rs ${totalPrice}</span>
        </div>
        <div id="discountt">
            <span class="discountt">
                Discount on MRP
            </span>
            <span class="discount-rate">
                -Rs ${discountPrice}
            </span>
        </div>
        
        <div id="GST">
            <span class="GST">
                Applied GST
            </span>
            <span class="chutt-price">
                ${Math.floor(gstPrice)}
            </sp>
        </div>
        <div id="payble">
            <span class="payble">
                Final Payble Price
            </span>
            <span class="payble-price">
                ${finalPay}
            </span>
        </div>
    </div>
    <button class="payment-btn">
        Place Order <span></span>
    </button>`

}



// Dono main elements ko select kiya
const mainOne = document.getElementById('main-one');
const mainTwo = document.getElementById('main-two');

// Dono buttons ko select kiya
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');

// Jab 'Go to Main Two' button click ho
nextBtn.addEventListener('click', () => {
    mainOne.classList.add('hidden');     // Main One ko chhupao
    mainTwo.classList.remove('hidden');  // Main Two ko dikhao
});

const cartBtn = document.querySelector('#cartBtn');
cartBtn.addEventListener('click', () => {
    mainOne.classList.add('hidden');     // Main One ko chhupao
    mainTwo.classList.remove('hidden');  // Main Two ko dikhao
});


// Jab 'Go Back' button click ho (Optional, wapas jaane ke liye)
backBtn.addEventListener('click', () => {
    mainTwo.classList.add('hidden');     // Main Two ko chhupao
    mainOne.classList.remove('hidden');  // Main One ko wapas dikhao
});


/*




*/