let btn = document.getElementById("btn")

let nameInput = document.querySelector("section.form .contain form .name input")

let numberInput = document.querySelector("section.form .contain form .card-number input")

let month = document.querySelector("section.form .contain form .flex .date .inputs input.mon")

let year = document.querySelector("section.form .contain form .flex .date .inputs input.year")

let cvc = document.querySelector("section.form .contain form .flex .cvc input")

let errorName = document.querySelector("section.form .contain form .name span.error")

let errorNumber = document.querySelector("section.form .contain form .card-number span.error")

let errorDate = document.querySelector("section.form .contain form .date span.error")

let errorCvc = document.querySelector("section.form .contain form .cvc span.error")

let cardName = document.querySelector("section.cards .contain picture .content .text .info .name")

let monthSpan =  document.querySelector("section.cards .contain picture .content .text .info .date span.month")

let yearSpan =  document.querySelector("section.cards .contain picture .content .text .info .date span.year")

let cvcSpan =  document.getElementById("cvc")

let formSec = document.querySelector("section.form")

let thankSec = document.querySelector("section.thank")

let contBtn = document.querySelector("section.thank .btn button")

function validNumber(n){
    for(let i =0 ; i<n.length;i++){
        if(n[i].charCodeAt(0) < 48 || n[i].charCodeAt(0) > 57){
            return false;
        }
    }

    return true;
}

nameInput.addEventListener("input",function(){
    if(nameInput.value.length > 0){
        cardName.innerHTML  = nameInput.value
    }else{
        cardName.innerHTML = "JANE APPLESEED"
    }
})

numberInput.addEventListener("input",function(){
    if(numberInput.value.length == 4){
        document.getElementById("one").innerHTML  = numberInput.value
    }else if(numberInput.value.length == 8){
        document.getElementById("two").innerHTML  = numberInput.value.slice(4)
    }else if(numberInput.value.length == 12){
        document.getElementById("three").innerHTML  = numberInput.value.slice(8)
    }else if(numberInput.value.length == 16){
        document.getElementById("four").innerHTML  = numberInput.value.slice(12)
    }else if(numberInput.value.length == 0){
        document.querySelectorAll("section.cards .contain picture .content .text .number span").forEach(s=>{
            s.innerHTML = "0 0 0 0"
        })
    }
})

month.addEventListener("input",function(){
    if(month.value.length == 1){
        monthSpan.innerHTML = "0" + month.value
    }else if(month.value.length == 2){
        monthSpan.innerHTML =  month.value
    }else {
        monthSpan.innerHTML = "00"
    }
})

year.addEventListener("input",function(){
    if(year.value.length == 1){
        yearSpan.innerHTML = "0" + year.value
    }else if(year.value.length == 2){
        yearSpan.innerHTML =  year.value
    }else {
        yearSpan.innerHTML = "00"
    }
})

cvc.addEventListener("input",function(){
    if(cvc.value.length == 3){
        cvcSpan.innerHTML = cvc.value
    }else{
        cvcSpan.innerHTML = "000"
    }
})

btn.addEventListener("click",function(){
    if(nameInput.value.length > 0 && numberInput.value.length == 16 && validNumber(numberInput) && (month.value.length == 1 || month.value.length == 2) && (year.value.length == 1 || year.value.length == 2) && cvc.value.length == 3) {
        thankSec.classList.toggle('hide')
        formSec.classList.toggle('hide')
    }else if(nameInput.value.length == 0){
        errorName.classList.add("active")
        nameInput.classList.add("active")
    }else if(numberInput.value.length == 0 || !validNumber(numberInput)){
        errorNumber.classList.add("active")
        numberInput.classList.add("active")
    }else if(month.value.length == 0 || year.value.length == 0){
        errorDate.classList.add("active")
        if(month.value.length == 0){
            month.classList.add('active')
        }else{
            year.classList.add('active')
        }
    }else if(cvc.value.length != 3){
        errorCvc.classList.add("active")
        cvc.classList.add("active")
    }
})

contBtn.addEventListener("click",function(){
    nameInput.value = "";
    numberInput.value = "";
    month.value = ""
    year.value= ""
    cvc.value = ""
    cvcSpan.innerHTML = "000"
    yearSpan.innerHTML = "00"
    monthSpan.innerHTML = "00"
    document.querySelectorAll("section.cards .contain picture .content .text .number span").forEach(s=>{
        s.innerHTML = "0 0 0 0"
    })
    cardName.innerHTML = "JANE APPLESEED"
    thankSec.classList.toggle('hide')
    formSec.classList.toggle('hide')
})