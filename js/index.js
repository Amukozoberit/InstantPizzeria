let inputtedTop = [];
$(document).ready(function() {
    $("input").change(function() {
        var inputtedSize = $('input[name="Size"]:checked').val();
        var inputtedCrust = $('input[name="Crust"]:checked').val();
        var howMany = $('input#howMany').val();
        console.log(howMany)
        console.log(inputtedCrust);
        console.log(inputtedSize);
        var order1 = new Order(inputtedSize, inputtedCrust, inputtedTop, howMany)
        console.log(order1);
        var size = document.getElementById("orderSize");
        size.textContent = "Size:       " + inputtedSize;
        var Crust = document.getElementById("orderCrust");
        Crust.textContent = "Crust:      " + inputtedCrust;
        var toppings = document.querySelector("#orderToppings");
        toppings.textContent = " "

        toppings.textContent = "Toppings:       " + inputtedTop;
        var ordertot = document.querySelector("#orderTotal p");
        ordertot.textContent = "Total=    " +
            order1.total();
    });
    $("form button#new-order").click(function(event) {
        return false;
    });
    openNav();

});
$("input[type=checkbox]").change(function() {
    if (inputtedTop.includes(this.value)) {
        inputtedTop.splice(inputtedTop.indexOf(this.value), 1);
    } else {
        inputtedTop.push(this.value);
    };
});





function Order(Size, Crust, Toppings, howMany) {
    this.Size = Size;
    this.Crust = Crust;
    this.Toppings = Toppings;
    this.howMany = howMany;
}
let sizePrices = {
    Small: 500,
    Medium: 550,
    Large: 600,
    Any: 0,
}
let crustPrices = {
    Crispy: 50,
    Stuffed: 100,
    gluttenFree: 230,
    none: 0,
}
let CheckPrices = {

}

let toppingPrice = {
    Broccolini: 50,
    Sausage: 150,
    Potatoes: 30,
    Capsicum: 50
}

Order.prototype.total = function() {
    let total = 0;
    let sizep = parseInt(sizePrices[this.Size]);
    let crustP = parseInt(crustPrices[this.Crust]);
    let howMany = parseInt(this.howMany);
    let arr = this.Toppings;
    total += sizep;
    total += crustP;

    tops = arr.forEach(function(top) {
        total += parseInt(toppingPrice[top]);
    });
    total *= howMany;
    return (total);
}


function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    padding: "20px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}