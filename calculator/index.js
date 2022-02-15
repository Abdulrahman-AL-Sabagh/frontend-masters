let currentValue = "";
let secondValue = 0
let lastoperation = "";
display = document.getElementById("display");


document.getElementById("C").addEventListener("click", () => {
    display.innerHTML = 0
    secondValue = 0
    lastoperation = "";
    currentValue="";

});

for (const i of document.getElementsByClassName("num")) {

    i.addEventListener("click", () => {

        let value = parseInt(display.innerHTML + i.innerHTML);
        currentValue === "" ? currentValue=value : secondValue = value;
        console.log(value)
        display.innerHTML = "" + value;


    })
}
document.getElementById("plus").addEventListener("click", () => {
    lastoperation = "plus"
    if (secondValue != 0) {
        currentValue += secondValue;
    }
    secondValue = 0;
    display.innerHTML = 0;
})
document.getElementById("minus").addEventListener("click", () => {
    lastoperation = "minus"
    if (secondValue != 0) {
        currentValue -= secondValue;
    }
    secondValue

    display.innerHTML = 0;
})
document.getElementById("multiply").addEventListener("click", () => {
    lastoperation = "multiply"
    if (secondValue != 0) {
        currentValue *= secondValue;
    }
    secondValue

    display.innerHTML = 0;
})
document.getElementById("divide").addEventListener("click", () => {
    lastoperation = "divide"
    if (secondValue != 0) {
        currentValue /= secondValue;
    }
    secondValue
    display.innerHTML = 0;
})
document.getElementById("equals").addEventListener("click", () => {
    switch (lastoperation) {
        case "plus":
            currentValue += secondValue
            break;
        case "minus" :
            currentValue -= secondValue
            break;
        case "multiply" :
            currentValue *= secondValue
            break;
        case "divide":
            currentValue /= secondValue

            break;


    }
    currentValue===""?display.innerHTML=display.innerHTML:display.innerHTML=currentValue;
    secondValue = 0
    lastoperation = ""

})
document.getElementById("del").addEventListener("click", () => {
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
    if (display.innerHTML.length === 0) {
        display.innerHTML = "0";
    }
    lastoperation === "" ? currentValue = parseInt(display.innerHTML) : currentValue = currentValue;

})