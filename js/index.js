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
    $("#new-order").click(function(event) {
        alert("if you want it delivered then you have to enter your details below.<br>Click ok to proceed")
        var size = document.querySelector("#orderSize")
        var Crust = document.querySelector("#orderCrust")
        var Toopings = document.querySelector("#orderToppings");
        var howMany = $("input#howMany").val();
        var Total = document.querySelector("#orderTotal p")
        if (($('input[name="Size"]:checked').val() === "Any") || ($('input[name="Crust"]:checked').val() === "") || (inputtedTop.length === 0)) {
            alert("hey your order is incomplete");
            $('input[type="radio"]').prop("checked", false);
            $('input[type="checkbox"]').prop("checked", false);
            return false;
        }
        bo = '<div class="card w-400px">' +
            '<div class="card-header">' +
            '<h1 class="center">Order Summary</h1>' +
            '</div>' +
            '<div class="card-body">' +
            '<ul style="font-weight:bold" class="pb-5 mb-5">' +
            '<li>' + size.innerHTML + '</li>' +
            '<li class="p-3">' + Crust.innerHTML + '</li>' +
            '<li class="p-3">' + Toopings.innerHTML + '</li>' +
            '<li class="p-3">' + 'HowMany: ' + howMany + '</li>' +
            '<li style="border:1px black; padding:5px; margin:3px; height:100%;">' + 'Ksh' + Total.innerHTML + '</li>' +
            '</ul>' + '</div>' +
            '<div class="card-footer">' +
            '<p>Destination details: </p>' +
            '</div>';
        document.getElementsByTagName("body")[0].innerHTML = bo;

        $('input[type="radio"]').prop("checked", false);
        $('input[type="checkbox"]').prop("checked", false);
        return false;
    });

});
$("input[type=checkbox]").change(function() {
    if (inputtedTop.includes(this.value)) {
        inputtedTop.splice(inputtedTop.indexOf(this.value), 1);
    } else {
        inputtedTop.push(this.value);
    };
});

function deliveries() {
    // alert("subm");
    var location;
    var Email;
    if ($("input#location").val() === "") {
        alert("empty inputs");
        return false;
    } else {
        location = $("input#location").val();
    }

    if ($("input#phone").val() === "") {
        alert("empty phone");
        return false;
    } else {
        Email = $("input#mail").val();
    }
    var y = document.getElementById('new-order');
    y.style.display = 'block';
}

$("#submit").click(function() {
    deliveries();
    //alert(location + phoneNum + Email);
    return false;
})

function show() {
    var x = document.getElementById('showD');
    var y = document.getElementById('new-order');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'block';
    }
}
$(".showdelivery").click(function() {
    show();
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