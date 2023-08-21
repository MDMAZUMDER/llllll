let total = 0;
function evantHandler(terget) {
const expotPlaces = document.getElementById('inputPlases');

const prodectName = terget.childNodes[3].childNodes[3].innerText;
const li = document.createElement('li');
li.innerText = prodectName;
expotPlaces.appendChild(li);
  
  const totalPrice = document.getElementById('TotalPrice');
  const totalText = totalPrice.innerText;

  const discountPlace = document.getElementById('discountFeild');
  const discountText = discountPlace.innerText;
  const mottakes = document.getElementById('mottake');
  const payprice = mottakes.innerText;
  
  const priceElimentString = terget.childNodes[3].childNodes[5].innerText.split(" ")[0];
  const price = parseFloat(priceElimentString);
  const result = total = total + price;
  const finalTotalPrice = totalPrice.innerText = result;
  
  const applybt = document.getElementById('ApplyButton');
    const Discount = 20;
    const percentage = 100;
    const accounting = result / percentage;
  const DiscountValue = accounting * Discount;
  const llll = DiscountValue.toFixed(2)


  const fiprice = result - DiscountValue;
  mottakes.innerText = fiprice;

   
  


let couponCode = "SELL200";
  const couponFeild = document.getElementById('couponFeild');
  let couponValue = couponFeild.value;
    // discountPlace.innerText = DiscountValue;   

  
 if (result > 199) {
   applybt.removeAttribute('disabled')

   discountPlace.innerText = llll;

    } else {
      applybt.setAttribute('disabled', true)
  }
  const by = document.getElementById('buyId');
 if (result >1) {
   by.removeAttribute('disabled')
    } else {
      by.setAttribute('disabled', true)
    }

}

document.getElementById('rButton').addEventListener('click', function () {
  //  window.location.href = 'test.html';
})
