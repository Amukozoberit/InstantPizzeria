let inputtedTop = [];
$(document).ready(function() {
    $("input").change(function() {
        var inputtedSize = $('input[name="Size"]:checked').val();
        var inputtedCrust = $('input[name="Crust"]:checked').val();
        // console.log(inputtedTop);
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

});
$("input[type=checkbox]").change(function() {

    if (inputtedTop.includes(this.value)) {

        inputtedTop.splice(inputtedTop.indexOf(this.value), 1);
    } else {
        inputtedTop.push(this.value);
    };


});

$("#add-form").click(function() {
    $("form#pizzaOrder").append()
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