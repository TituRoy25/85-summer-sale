let total = 0;

function handleClik(target){
    const selectedItem = document.getElementById("select-item");
    const itemName = target.childNodes[3].childNodes[3].innerText;

    const count = selectedItem.childElementCount;

    const ol = document.createElement("ol");
    ol.innerText = `${count + 1}.${itemName}`;
    selectedItem.appendChild(ol);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    document.getElementById("total-price").innerText = total.toFixed(2);

    if(total >= 200){
        document.getElementById('apply-button').disabled = false;
    }
    else{
        document.getElementById('apply-button').disabled = true;
 
    }

    if(total >= 1){
        document.getElementById('make-purchase').disabled = false;
    }
    else{
        document.getElementById('make-purchase').disabled = true;
 
    }

    
}

function amountDiscount(){
    if(document.getElementById("input-coupon").value === "SELL200")
    {
        const discount = (total*0.2).toFixed(2);
        document.getElementById("discount-price").innerText = discount;
    
        const totalPrice = total - discount;
        document.getElementById("total-pay").innerText = totalPrice.toFixed(2);
   
    }
}

function clearAllSopingData(){
    location.reload(document.getElementById("clear-all-data"));
}