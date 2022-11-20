function calculateTip() {
    let billAmount = document.getElementById('billAmount').value
    let serviceQuantity = document.getElementById('serviceQuantity').value
    let totalPeople = document.getElementById('totalPeople').value

    if(billAmount ==="" || serviceQuantity == 0){
        window.alert('Please enter the values!!!')
        return
    }

    if(totalPeople === "" || totalPeople <= 1){
        totalPeople = 1

        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";
    }

    let totalAmount = (billAmount*serviceQuantity)/totalPeople
    // totalAmount = Math.round(totalAmount*100)/100
    totalAmount = totalAmount.toFixed(2)

    document.getElementById('tipAmount').style.display = "block";
    document.getElementById('tip').innerText = totalAmount
}

document.getElementById('calculate').onclick = function(){calculateTip();}