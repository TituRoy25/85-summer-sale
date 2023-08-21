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
    document.getElementById("total-price").innerText = total;
}